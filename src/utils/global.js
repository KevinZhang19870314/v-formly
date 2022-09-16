const global = {
    formValueChangeName: 'form-value-change',
    schema: {},
    ui: {
        spanLabel: 5,
        spanControl: 19,
        grid: {
            gutter: 36,
            span: 24,
        }
    }
}

const FORM_VALUE_CHANGE = global.formValueChangeName;

const getSchema = () => {
    return global.schema || {};
}

const setUI = (ui) => {
    global.ui = ui || {};
}

const getUI = () => {
    return global.ui || {};
}

const setSchema = (schema) => {
    global.schema = schema || {};
}

const updateObjProp = (obj, propPath, value) => {
    const [head, ...rest] = propPath.split('.');

    !rest.length
        ? obj[head] = value
        : updateObjProp(obj[head], rest.join('.'), value);
}

export {
    getSchema,
    setSchema,
    getUI,
    setUI,
    FORM_VALUE_CHANGE,
    updateObjProp
};