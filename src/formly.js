import EventBus from "@/utils/event-bus.js";
import VFormly from "./Formly.vue";

const components = [
    VFormly
];

const Formly = {
    // eslint-disable-next-line no-unused-vars
    install(Vue, options) {
        Vue.use(EventBus);
        components.forEach(component => {
            Vue.component(component.name, component);
        });

        // 传入自定义options
        Vue.prototype.$VFORMLY_OPTIONS = options;
    },
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Formly);
}

export default Formly;