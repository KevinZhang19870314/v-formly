import Vue from "vue";

class Global {
  constructor() {
    this._context = null;
    this._layout = 'horizontal';
    this._ajvOptions = {
      allErrors: true,
      strict: false,
      loopEnum: 50,
    };
    this._formData = null;
    this._schema = {};
    this._ui = {
      ingoreKeywords: ['type', 'enum'],
      spanLabel: 5,
      spanControl: 19,
      grid: {
        gutter: 36,
        span: 24,
      },
      errors: {
        'required': '必填项'
      }
    };
    this._validate = null;

    this._applyUseOptions();
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
    this._ui = Object.assign({}, this._ui, val);
  }

  get validate() {
    return this._validate;
  }

  set validate(val) {
    this._validate = val;
  }

  updateObjProp(obj, propPath, value) {
    const [head, ...rest] = propPath.split("/").filter((f) => f);

    if (rest.length) {
      this.updateObjProp(obj[head], rest.join("/"), value);
    } else {
      if (obj) {
        obj[head] = value;
      }
    }
  }

  _applyUseOptions() {
    const options = Vue.prototype.$VFORMLY_OPTIONS;
    if (!options || typeof options !== 'object') return;

    this.ui = options.ui;
  }
}

export { Global };
