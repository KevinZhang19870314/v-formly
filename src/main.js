import Vue from 'vue';
import { Card, Button, FormModel, Tooltip, Icon, Input, Row, Col, Switch } from 'ant-design-vue';
import App from './App.vue';
import EventBus from "./utils/event-bus.js";

import "@/style/index.less";

Vue.config.productionTip = false;

Vue.use(EventBus);

Vue.use(Card);
Vue.use(Button);
Vue.use(FormModel);
Vue.use(Tooltip);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Switch);

new Vue({
  render: h => h(App),
}).$mount('#app');
