const Ajv = require("ajv");
import Vue from "vue";
import { FORM_ERROR_CHANGE } from "@/utils/consts.js";

class ValidateFactory {
    constructor(state) {
        this.state = state;
        this._ajv = new Ajv(state.ajvOptions);
        this._validate = null;
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
            const _id = `${error.instancePath}${error.instancePath ? '/' : ''}${error.params.missingProperty}`;
            if (id === _id) {
                _error = error;
                break;
            }
        }

        return _error;
    }

    // 需要一个全局的formData的validation，提交时触发全部的，在ajv的validate之后
    // 拿到全局map里面的context，调用getAjvError然后emit错误
    validate() {
        const validate = this._ajvValidate(this.state.schema);
        const valid = validate(this.state.formData);
        if (!valid) {
            const contexts = this.state.context.getContexts();
            const ids = contexts.keys();
            for (const id of ids) {
                const error = this._getAjvError(id, validate.errors);
                if (error) {
                    Vue.bus.emit(FORM_ERROR_CHANGE, {
                        id: id,
                        error: error,
                    });
                } else {
                    Vue.bus.emit(FORM_ERROR_CHANGE, {
                        id: id,
                        error: undefined,
                    });
                }
            }
        }

        return valid;
    }

    runValidation(context) {
        const validate = this._ajvValidate(this.state.schema);
        const valid = validate(this.state.formData);
        if (!valid) {
            const ingoreKeywords = this.state.ui.ingoreKeywords || [];
            const errors = validate.errors.filter(f => ingoreKeywords.indexOf(f.keyword) === -1);
            const error = this._getAjvError(context.id, errors);
            Vue.bus.emit(FORM_ERROR_CHANGE, {
                id: context.id,
                error: error,
            });
        } else {
            Vue.bus.emit(FORM_ERROR_CHANGE, {
                id: context.id,
                error: undefined,
            });
        }
    }
}

export { ValidateFactory };