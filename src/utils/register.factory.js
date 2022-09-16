import Vue from "vue";

/**
 * 注册组件
 * 
 * @param {String} id 注册组件的id
 * @param {String} type 与此组件对应的json-schema的type
 * @param {*} component 需要注册的组件
 */
function registerFormComponent(id, type, component) {
    Vue.component(id, component);
}

export { registerFormComponent };