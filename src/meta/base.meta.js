import Vue from "vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
class BaseMeta {
    constructor(state, id, meta, type = '') {
        this.id = id;
        this.state = state;
        this.meta = meta;
        this.type = type;
        this.ui = Object.assign({}, this.state.ui, this.meta.ui);
        this.schema = this.meta || {};

        // TODO:可能需要一个getter/setter，setter需要判断是否有错误，有错误才设置上去
        this.error = undefined;
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
        this.state.validate.runValidationFormItem(this);
    }
}

export { BaseMeta };