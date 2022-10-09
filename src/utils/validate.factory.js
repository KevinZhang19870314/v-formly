const Ajv = require("ajv");
import Vue from "vue";
import { FORM_ERROR_CHANGE } from "@/utils/consts.js";

class ValidateFactory {
    constructor(state) {
        this.state = state;
        this._ajv = new Ajv(state.ajvOptions);
        this._validate = null;
    }

    async runValidateForm() {
        const { valid, errors } = this._isAjvValid();
        const contexts = this.state.context.getContexts();
        const instances = contexts.values();
        let isValid = true;
        for (const instance of instances) {
            isValid = isValid && await this._validation(instance, valid, errors);
        }

        return isValid;
    }

    async runValidationFormItem(context) {
        const { valid, errors } = this._isAjvValid();
        let isValid = await this._validation(context, valid, errors);
        return isValid;
    }

    _ajvValidate(schema) {
        if (this._validate) return this._validate;

        this._validate = this._ajv.compile(schema);
        return this._validate;
    }

    _getAjvError(id, errors) {
        let _error = undefined;
        for (let i = 0; i < errors.length; i++) {
            const error = errors[i];
            const _id = this._getId(error);
            if (id === _id) {
                _error = error;
                break;
            }
        }

        return _error;
    }

    _isAjvValid() {
        const validate = this._ajvValidate(this.state.schema);
        const valid = validate(this.state.formData || {});

        return { valid, errors: validate.errors };
    }

    async _validation(context, valid, errs) {
        let errors = [];
        if (!valid) {
            const customErrors = this._getCustomError(context);
            const customAsyncErrors = await this._getCustomAsyncError(context);
            const cusErrors = [...customErrors, ...customAsyncErrors];
            this._replaceWithDefaultErrors(context, errs);
            this._replaceWithCustomErrors(context.id, errs, cusErrors);
            const ingoreKeywords = this.state.ui.ingoreKeywords || [];
            errors = errs.filter(f => ingoreKeywords.indexOf(f.keyword) === -1);
            const error = this._getAjvError(context.id, errors);
            Vue.bus.emit(FORM_ERROR_CHANGE, {
                id: context.id,
                error: error,
            });

            return error ? false : true;
        } else {
            Vue.bus.emit(FORM_ERROR_CHANGE, {
                id: context.id,
                error: undefined,
            });

            return true;
        }
    }

    _getCustomError(context) {
        const validator = (context.meta.ui && context.meta.ui.validator);
        if (!validator) return [];

        return validator(context.value);
    }

    async _getCustomAsyncError(context) {
        const validatorAsync = (context.meta.ui && context.meta.ui.validatorAsync);
        if (!validatorAsync) return [];

        return await validatorAsync(context.value);
    }

    _replaceWithDefaultErrors(context, errors) {
        if (!errors || errors.length === 0) return;

        const localErrors = (context.meta.ui && context.meta.ui.errors) || {};
        const globalErrors = Object.assign({}, this.state.ui.errors, localErrors);
        const keywords = Object.keys(globalErrors);
        if (keywords && keywords.length > 0) {
            keywords.forEach(keyword => {
                let cur = errors.find(f => f.keyword === keyword);
                if (cur) {
                    cur.message = globalErrors[keyword];
                }
            });
        }
    }

    _replaceWithCustomErrors(id, errors, customErrors) {
        customErrors.forEach(err => {
            let cur = errors.find(f => f.keyword === err.keyword && this._getId(f) === id);
            if (cur) {
                cur.message = err.message;
            }
        });
    }

    _getId(error) {
        const id = `${error.instancePath}${error.instancePath ? '/' : ''}${error.params.missingProperty}`;
        return id;
    }
}

export { ValidateFactory };