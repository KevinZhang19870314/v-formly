import { BaseMeta } from "./base.meta";
class StringMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);

    if (this.meta) {
      this.open = (this.meta.ui && this.meta.ui.open) || false;
    }
  }

  setValue(val) {
    this._value = val || undefined;
  }
}

export { StringMeta };