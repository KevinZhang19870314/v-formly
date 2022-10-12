import { BaseMeta } from "@/formly.js";
class PasswordMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);
  }

  setValue(val) {
    this._value = (val && val.trim()) || undefined;
  }
}

export { PasswordMeta };
