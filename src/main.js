import Vue from 'vue';
import App from './App.vue';
import router from './router'
import EventBus from "./utils/event-bus.js";
import '@/utils/ant-design-vue.js'
import "@/style/index.less";

Vue.config.productionTip = false;

Vue.use(EventBus);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
