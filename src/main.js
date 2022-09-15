import Vue from 'vue';
import { Button, FormModel, Tooltip, Icon } from 'ant-design-vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(FormModel);
Vue.use(Tooltip);
Vue.use(Icon);

new Vue({
  render: h => h(App),
}).$mount('#app');
