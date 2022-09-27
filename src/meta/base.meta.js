import Vue from "vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
class BaseMeta {
    constructor(state, id, type = '') {
        this.id = id;
        this.state = state;
        this.type = type;
        state.context.addContext(id, this);
        this._value = undefined;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        if (this._value === val) return;

        switch (this.type) {
            case "boolean":
                this._value = val || false;
                break;
            default:
                this._value = val || undefined;
                break;
        }

        Vue.bus.emit(FORM_VALUE_CHANGE, {
            id: this.id,
            value: val,
        });

        this.state.updateObjProp(this.state.formData, this.id, val);
        this.state.validate.runValidation(this);
    }
}

export { BaseMeta };