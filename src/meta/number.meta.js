import { BaseMeta } from "./base.meta";
class NumberMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);
  }

  initValue() {
    if (this._initMetaValue) {
      this.value = this._initMetaValue;
    } else if (this.meta.default) {
      this.value = this.meta.default;
    }
  }

  setValue(val) {
    switch (this.type) {
      case "slider":
        this._value =
          Array.isArray(val) || typeof val == "number" ? val : undefined;
        break;
      default:
        this._value = val || undefined;
        break;
    }
  }
}

export { NumberMeta };
