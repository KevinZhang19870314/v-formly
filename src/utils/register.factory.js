import Vue from "vue";

/**
 * 注册组件
 * 
 * @param {String} id 注册组件的id
 * @param {*} component 需要注册的组件
 */
function registerFormComponent(id, component) {
    Vue.component(id, component);
}

/**
 * 过滤出antd组件需要的props
 * 
 * @param {*} props antd组件全量的props
 * @param {*} ui 组件对应meta的ui对象
 */
function getBindings(props, ui) {
    const bindings = {}
    const uiKeys = Object.keys(ui);
    uiKeys.forEach((key) => {
      if (props.indexOf(key) > -1) {
        bindings[key] = ui[key]
      }
    });
  
    return bindings;
  }
  

export { registerFormComponent, getBindings };