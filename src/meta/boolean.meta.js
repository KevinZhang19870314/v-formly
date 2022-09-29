import { BaseMeta } from "./base.meta";
class BooleanMeta extends BaseMeta {
    constructor(state, id, meta) {
        super(state, id, meta, typeof true);
    }
}

export { BooleanMeta };