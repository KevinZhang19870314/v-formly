const global = {
    context: null,
    layout: 'horizontal', // 'horizontal','vertical','inline'
    formValueChangeName: 'form-value-change',
    formErrorChangeName: 'form-error-change',
    ajvOptions: {
        allErrors: true
    },
    schema: {},
    ui: {
        spanLabel: 4,
        spanControl: 19,
        grid: {
            gutter: 36,
            span: 24,
        }
    }
}

const FORM_VALUE_CHANGE = global.formValueChangeName;
const FORM_ERROR_CHANGE = global.formErrorChangeName;

const getContext = () => {
    return global.context;
}

const setContext = (context) => {
    global.context = context;
}

const getAjvOptions = () => {
    return global.ajvOptions;
}

const setAjvOptions = (options) => {
    global.ajvOptions = Object.assign({}, global.ajvOptions, options);
}

const getLayout = () => {
    return global.layout || {};
}

const setLayout = (layout) => {
    global.layout = layout || {};
}

const getSchema = () => {
    return global.schema || {};
}

const setSchema = (schema) => {
    global.schema = schema || {};
}

const setUI = (ui) => {
    global.ui = ui || {};
}

const getUI = () => {
    return global.ui || {};
}

const updateObjProp = (obj, propPath, value) => {
    const [head, ...rest] = propPath.split('/').filter(f => f);

    !rest.length
        ? obj[head] = value
        : updateObjProp(obj[head], rest.join('/'), value);
}

export {
    getContext,
    setContext,
    getAjvOptions,
    setAjvOptions,
    getLayout,
    setLayout,
    getSchema,
    setSchema,
    getUI,
    setUI,
    FORM_VALUE_CHANGE,
    FORM_ERROR_CHANGE,
    updateObjProp
};