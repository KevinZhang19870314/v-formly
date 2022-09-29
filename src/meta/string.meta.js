import { BaseMeta } from "./base.meta";
class StringMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id);

    this.meta = meta;
    if (this.meta) {
      this.open = (this.meta.ui && this.meta.ui.open) || false;
    }
  }
}

export { StringMeta };