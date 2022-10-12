import { BaseMeta } from "@/formly.js";
class ChkInputMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);

    this._optionsValue = [];
    this._othersValue = undefined;

    this.initValue();
  }

  initValue() {
    const val = this._initMetaValue || this.meta.default || {};
    this._applyToValue(val.options, val.others);
  }

  setValue(val) {
    this._value = val || undefined;

    this._optionsValue = (val && val.options) || [];
    this._othersValue = (val && val.others) || undefined;
  }

  get optionsValue() {
    return this._optionsValue;
  }

  set optionsValue(val) {
    this._optionsValue = val;
    this._applyToValue(this._optionsValue, this._othersValue);
  }

  get othersValue() {
    return this._othersValue;
  }

  set othersValue(val) {
    this._othersValue = val;
    this._applyToValue(this._optionsValue, this._othersValue);
  }

  _applyToValue(options, others) {
    if ((!options || options.length === 0) && !others) {
      this.value = undefined;
      return;
    }

    this.value = { options, others };
  }
}

export { ChkInputMeta };
