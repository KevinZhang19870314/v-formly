import Vue from "vue";
import { UUID, deepClone } from "@/utils/utils";
import { BaseMeta } from "./base.meta";

class ArrayMeta extends BaseMeta {
  constructor(state, id, meta) {
    super(state, id, meta);
    
    this.ids = [];
  }

  initValue() {
    // 覆盖 BaseMeta 的 initValue 逻辑，这里不需要设置 value
  }

  get value() {
    return this.getPathValue(this.state.formData, this.id) || [];
  }

  set value(val) {
    // 只允许设置 null / undefined / Array 类型的值
    if (!Array.isArray(val) && val != null) return;
    const len = this.ids.length;
    // 从后往前删除
    for (let i = 0; i < len; i++) {
      this.remove(len - i - 1);
    }
    if (val.length) {
      val.forEach(() => this.add({ validate: false }));
      this.validate();
      Vue.nextTick(() => {
        val.forEach((data, index) => {
          const ctx = this.state.context.getContext(`${this.id}/${index}`);
          ctx.value = data;
        });
      });
    }
  }

  validate() {
    // 仅对 array 做 minItems/maxItems 校验
    return this.state.validate.runValidationFormItem(this);
  }

  getPathValue(sourceData, path) {
    const props = path.split("/").filter((f) => f);
    let res = deepClone(sourceData);
    for (let i = 0; i < props.length; i++) {
      const key = props[i];
      res = res[key];
    }
    return res;
  }

  // 根据 itmes properties 生成空对象
  getEmptyData() {
    const obj = {};
    const properties = this.meta.items.properties;
    Object.keys(properties).forEach((key) => {
      const meta = properties[key];
      switch (meta.type) {
        case "object":
          obj[key] = {};
          break;
        case "array":
          obj[key] = [];
          break;
        default:
          obj[key] = undefined;
          break;
      }
    });
    return obj;
  }

  // 在数组尾添加一个空对象
  add({ validate } = { validate: true }) {
    const id = `${this.id}/${this.ids.length}`;
    const value = this.getEmptyData();
    this.state.updateObjProp(this.state.formData, id, value);
    this.ids.push({ key: UUID() });

    validate && this.validate();
    return id;
  }

  remove(index) {
    // update ids
    this.ids.splice(index, 1);
    // update formData
    const props = this.id.split("/").filter((f) => !!f);
    props.reduce((obj, key, idx) => {
      if (idx === props.length - 1) {
        obj[key].splice(index, 1);
      }
      return obj[key];
    }, this.state.formData);
    // update context
    const keys = [];
    for (const key of this.state.context._map.keys()) {
      if (new RegExp(`^/?${this.id}/`).test(key)) {
        keys.push(key);
      }
    }
    for (let i = index + 1; i < this.ids.length + 1; i++) {
      const regex = new RegExp(`^(/?${this.id}/)${i}`);
      keys
        .filter((key) => regex.test(key))
        .forEach((key) => {
          const ctx = this.state.context.getContext(key);
          const newKey = key.replace(regex, (match, p1) => {
            return `${p1}${i - 1}`;
          });
          ctx.id = newKey;
          // object 的 id 比较特殊,需要重新计算
          if (ctx.childMetaPairs) {
            const newChildMetaPairs = ctx.buildChildMetaPairs(newKey, ctx.meta);
            ctx.childMetaPairs.forEach((item, idx) => {
              item.key = newChildMetaPairs[idx].key;
            });
          }
          this.state.context.addContext(newKey, ctx);
        });
    }
    const regex = new RegExp(`^/?${this.id}/${this.ids.length}`);
    keys
      .filter((key) => regex.test(key))
      .forEach((key) => {
        this.state.context.removeContext(key);
      });

    this.validate();
  }
}

export { ArrayMeta };
