class Global {
    constructor() {
        this._context = null;
        this._layout = 'horizontal';
        this._ajvOptions = {
            allErrors: true,
            strict: false
        };
        this._formData = null;
        this._schema = {};
        this._ui = {
            spanLabel: 4,
            spanControl: 19,
            grid: {
                gutter: 36,
                span: 24,
            }
        };
        this._validate = null;
    }

    get context() {
        return this._context;
    }

    set context(val) {
        this._context = val;
    }

    get layout() {
        return this._layout;
    }

    set layout(val) {
        this._layout = val;
    }

    get ajvOptions() {
        return this._ajvOptions;
    }

    set ajvOptions(val) {
        this._ajvOptions = val;
    }

    get formData() {
        return this._formData;
    }

    set formData(val) {
        this._formData = val;
    }

    get schema() {
        return this._schema;
    }

    set schema(val) {
        this._schema = val;
    }

    get ui() {
        return this._ui;
    }

    set ui(val) {
        this._ui = val;
    }

    get validate() {
        return this._validate;
    }

    set validate(val) {
        this._validate = val;
    }

    updateObjProp(obj, propPath, value) {
        const [head, ...rest] = propPath.split('/').filter(f => f);

        !rest.length
            ? obj[head] = value
            : this.updateObjProp(obj[head], rest.join('/'), value);
    }
}

export { Global };
