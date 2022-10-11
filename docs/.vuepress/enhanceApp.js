import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import "@/style/index.less";

import VFormly from "@/formly.js";

export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
}) => {
    Vue.use(Antd);
    Vue.use(VFormly);
}