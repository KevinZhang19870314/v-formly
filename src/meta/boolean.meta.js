import { BaseMeta } from "./base.meta";
class BooleanMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);
  }

  setValue(val) {
    this._value = val || false;
  }
}

export { BooleanMeta };
