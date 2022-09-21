import { buildChildMetaPairs } from "./object.meta.js";
class ArrayMeta {
  constructor(state, id, meta) {
    console.log(id, meta);
    this.state = state;
    this.id = id;
    this.meta = meta;
    this.properties = [];

    state.context.addContext(id, this);
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

  UUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  add() {
    // 在最后一项添加
    const id = `${this.id}/${this.properties.length}`;
    const value = this.getEmptyData();
    this.state.updateObjProp(this.state.formData, id, value);
    this.properties.push({ key: this.UUID() });
    return id;
  }

  remove(index) {
    const props = this.id.split("/").filter((f) => f);
    props.reduce((obj, key, idx) => {
      if (idx === props.length - 1) {
        obj[key].splice(index, 1);
      }
      return obj[key];
    }, this.state.formData);
    this.properties.splice(index, 1);
    const keys = Object.keys(this.state.context._map);
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
  }
}

export { ArrayMeta };
