import { BaseMeta } from "@/formly.js";
class ChkInputMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);

    this._othersValue = undefined;
    this.chkVal = [];

    this.initValue();
  }

  initValue() {
    if (this._initMetaValue) {
      if (this._initMetaValue.length > 0 && this.ui.showOthers) {
        this._othersValue = this._initMetaValue[this._initMetaValue.length - 1];
        this._chkVal = this._initMetaValue.slice(0, -1);
        this._chkVal.push("Others");
      } else {
        this._chkVal = this._initMetaValue;
      }
    } else if (this.meta.default) {
      if (this.meta.default.length > 0 && this.ui.showOthers) {
        this._othersValue = this.meta.default[this.meta.default.length - 1];
        this._chkVal = this.meta.default.slice(0, -1);
        this._chkVal.push("Others");
      } else {
        this._chkVal = this.meta.default;
      }
    }

    this._applyToValue();
  }

  get chkVal() {
    return this._chkVal;
  }

  set chkVal(val) {
    this._chkVal = val;
    this._applyToValue();
  }

  get othersValue() {
    return this._othersValue;
  }

  set othersValue(val) {
    this._othersValue = val;
    this._applyToValue();
  }

  _applyToValue() {
    let chk = [...(this._chkVal || [])] || [];
    if (chk.length > 0 && chk[chk.length - 1] === "Others") {
      chk[chk.length - 1] = this._othersValue;
      if (!this._othersValue) {
        chk.length = 0;
      }
    }

    this.value = chk && chk.length > 0 ? chk : undefined;
  }
}

export { ChkInputMeta };
