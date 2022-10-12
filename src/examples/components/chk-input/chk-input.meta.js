import { BaseMeta } from "@/formly.js";
class ChkInputMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);

    this._chkVal = [];
    this._othersValue = undefined;

    this.initValue();
  }

  initValue() {
    const val = this._initMetaValue || this.meta.default || {};
    this._applyToValue(val.options, val.others);
  }

  setValue(val) {
    this._value = val || undefined;

    this._chkVal = (val && val.options) || [];
    this._othersValue = (val && val.others) || undefined;
  }

  get chkVal() {
    return this._chkVal;
  }

  set chkVal(val) {
    this._chkVal = val;
    this._applyToValue(this._chkVal, this._othersValue);
  }

  get othersValue() {
    return this._othersValue;
  }

  set othersValue(val) {
    this._othersValue = val;
    this._applyToValue(this._chkVal, this._othersValue);
  }

  _applyToValue(options, others) {
    this.value = { options, others };
  }
}

export { ChkInputMeta };
