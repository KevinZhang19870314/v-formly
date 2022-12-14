import Vue from "vue";
import { UUID } from "@/utils/utils";

class Global {
  constructor() {
    this._formId = UUID(4);
    this._context = null;
    this._layout = "horizontal";
    this._ajvOptions = {
      allErrors: true,
      strict: false,
      loopEnum: 50,
    };
    this._formData = null;
    this._meta = {};
    this._ui = {
      ingoreKeywords: ["type", "enum"],
      spanLabel: 5,
      spanControl: 19,
      grid: {
        gutter: 36,
        span: 24,
      },
      errors: {
        required: "必填项",
      },
    };
    this._validate = null;
    this._ignoreErrorIds = [];

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

  get meta() {
    return this._meta;
  }

  set meta(val) {
    this._meta = val;
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
    if (!options || typeof options !== "object") return;

    this.ui = options.ui;
  }
}

export { Global };
