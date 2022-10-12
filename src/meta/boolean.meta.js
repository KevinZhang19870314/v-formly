import { BaseMeta } from "./base.meta";
class BooleanMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);
  }

  initValue() {
    if (typeof this._initMetaValue !== "undefined") {
      this.value = this._initMetaValue;
    } else if (typeof this.meta.default === "boolean") {
      this.value = this.meta.default;
    }
  }

  setValue(val) {
    this._value = val || false;
  }
}

export { BooleanMeta };
