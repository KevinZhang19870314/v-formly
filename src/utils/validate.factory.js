import { getAjvOptions } from "./global";

const Ajv = require("ajv");
const ajv = new Ajv(getAjvOptions());

let _validate = null;

const ajvValidate = (schema) => {
    if (_validate) return _validate;

    _validate = ajv.compile(schema);
    return _validate;
}

const getAjvError = (id, errors) => {
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

export { ajvValidate, getAjvError };