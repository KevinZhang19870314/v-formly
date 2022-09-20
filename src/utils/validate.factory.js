const Ajv = require("ajv");
import Vue from "vue";
import { FORM_ERROR_CHANGE } from "@/utils/consts.js";

class ValidateFactory {
    constructor(state) {
        this.state = state;
        this._ajv = new Ajv(state.ajvOptions);
        this._validate = null;
    }

    ajvValidate(schema) {
        if (this._validate) return this._validate;

        this._validate = this._ajv.compile(schema);
        return this._validate;
    }

    getAjvError(id, errors) {
        let _error = undefined;
        for (let i = 0; i < errors.length; i++) {
            const error = errors[i];
            const _id = `${error.instancePath}/${error.params.missingProperty}`;
            if (id === _id) {
                _error = error;
                break;
            }
        }

        return _error;
    }

    runValidation(context) {
        const validate = this.ajvValidate(this.state.schema);
        const valid = validate(this.state.formData);
        if (!valid) {
            console.log('validate.errors', validate.errors);
            const error = this.getAjvError(context.id, validate.errors);
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