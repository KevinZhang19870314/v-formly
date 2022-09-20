const Ajv = require("ajv");

class ValidateFactory {
    constructor(global) {
        this._ajv = new Ajv(global.ajvOptions);
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
}

export { ValidateFactory };