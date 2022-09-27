import { BaseMeta } from "./base.meta";
class BooleanMeta extends BaseMeta {
    constructor(state, id) {
        super(state, id, typeof true);
    }
}

export { BooleanMeta };