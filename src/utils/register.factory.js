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

export { registerFormComponent };