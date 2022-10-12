import EventBus from "@/utils/event-bus.js";
import VFormly from "./Formly.vue";
import VWrapper from "@/components/Wrapper.vue";
import { componentMixin } from "@/mixin/component.mixin.js";
import { BaseMeta } from "@/meta/base.meta.js";
import { registerFormComponent } from "@/utils/register.factory.js";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";

const components = [VFormly, VWrapper];

const install = function (Vue, options) {
  Vue.use(EventBus);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  // 传入自定义options
  Vue.prototype.$VFORMLY_OPTIONS = options;
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export {
  install,
  BaseMeta,
  componentMixin,
  registerFormComponent,
  FORM_VALUE_CHANGE,
};

export default {
  install,
};
