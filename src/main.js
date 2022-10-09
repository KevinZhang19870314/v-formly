import Vue from 'vue';
import App from './App.vue';
import router from './examples/router'
import '@/examples/ant-design-vue.js';
import "@/style/index.less";
import VFormly from "@/formly.js";

Vue.config.productionTip = false;

Vue.use(VFormly, {
  ui: {
    errors: {
      'required': '必填项'
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
