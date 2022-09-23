import Vue from "vue";
import { UUID, deepClone } from "@/utils/utils";
import { buildChildMetaPairs } from "./object.meta.js";

class ArrayMeta {
  constructor(state, id, meta) {
    this.state = state;
    this.id = id;
    this.meta = meta;
    this.properties = [];

    state.context.addContext(id, this);
  }

  get value() {
    return this.getPathValue(this.state.formData, this.id);
  }

  restValue(val) {
    const len = this.properties.length;
    // 从后往前删除
    for (let i = 0; i < len; i++) {
      this.remove(len - i - 1);
    }
    if (!Array.isArray(val) || val.length === 0) return;

    val.forEach((data, index) => {
      this.add();
      Vue.nextTick(() => {
        const ctx = this.state.context.getContext(`${this.id}/${index}`);
        ctx.restValue(data);
      });
    });
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
          this.initFormData(obj[key], meta.properties);
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

  add() {
    // 在最后一项添加
    const id = `${this.id}/${this.properties.length}`;
    const value = this.getEmptyData();
    this.state.updateObjProp(this.state.formData, id, value);
    this.properties.push({ key: UUID() });
    return id;
  }

  remove(index) {
    console.time("remove");
    const props = this.id.split("/").filter((f) => f);
    props.reduce((obj, key, idx) => {
      if (idx === props.length - 1) {
        obj[key].splice(index, 1);
      }
      return obj[key];
    }, this.state.formData);
    this.properties.splice(index, 1);
    const keys = Object.keys(this.state.context._map).filter((key) =>
      new RegExp(`^/?${this.id}/`).test(key)
    );
    // update
    for (let i = index + 1; i < this.properties.length + 1; i++) {
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
            const newChildMetaPairs = buildChildMetaPairs(newKey, ctx.meta);
            ctx.childMetaPairs.forEach((item, idx) => {
              item.key = newChildMetaPairs[idx].key;
            });
          }
          this.state.context.addContext(newKey, ctx);
        });
    }
    // delete
    const regex = new RegExp(`^/?${this.id}/${this.properties.length}`);
    keys
      .filter((key) => regex.test(key))
      .forEach((key) => {
        this.state.context.removeContext(key);
      });

    console.timeEnd("remove");
  }
}

export { ArrayMeta };
