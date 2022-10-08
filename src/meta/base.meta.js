import Vue from "vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
class BaseMeta {
    constructor(state, id, meta) {
        if (this.constructor == BaseMeta) {
            throw new Error("Abstract classes can't be instantiated.");
        }

        this.id = id;
        this.state = state;
        this.meta = meta;
        this.type = (this.meta.ui && this.meta.ui.component) || this.meta.type;
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

        this.setValue(val);

        Vue.bus.emit(FORM_VALUE_CHANGE, {
            id: this.id,
            value: this._value,
        });

        this.state.updateObjProp(this.state.formData, this.id, this._value);
        this.state.validate.runValidationFormItem(this);
    }
}

// 注意：此类为基类，不能直接实例化
export { BaseMeta };
