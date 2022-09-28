import { BaseMeta } from "./base.meta";
class TimeMeta extends BaseMeta {
    constructor(state, id, meta) {
        super(state, id);

        this.meta = meta;
        this.open = (this.meta.ui && this.meta.ui.open) || false;

        this.openChange = (open) => {
            this.open = open;

            if (this.meta.ui && this.meta.ui.openChange) {
                this.meta.ui.openChange(open);
            }
        }

        this.change = (time, timeString) => {
            if (this.meta.ui && this.meta.ui.change) {
                this.meta.ui.change(time, timeString);
            }
        }
    }
}

export { TimeMeta };