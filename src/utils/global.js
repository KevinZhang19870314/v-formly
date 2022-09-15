const global = {
    schema: {},
    ui: {}
}

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

export {
    getSchema,
    setSchema,
    getUI,
    setUI
};