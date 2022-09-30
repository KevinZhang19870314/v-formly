import { BaseMeta } from "./base.meta";
class NumberMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);
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
