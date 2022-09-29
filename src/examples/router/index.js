import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StringView from '../views/StringView.vue'
import BooleanView from '../views/BooleanView.vue'
import ObjectView from '../views/ObjectView.vue'
import ArrayView from '../views/ArrayView.vue'
import AutoCompleteView from '../views/AutoCompleteView.vue'
import CheckboxView from '../views/CheckboxView.vue';
import DateView from '../views/DateView.vue';
import NumberView from '../views/NumberView.vue';
import TimeView from '../views/TimeView.vue';
import TextView from '../views/TextView.vue';
import RadioView from '../views/RadioView.vue';
import TextareaView from '../views/TextareaView.vue';
import redirect from '../layout/components/redirect.vue';

/* Layout */
import BasicLayout from "../layout/BasicLayout.vue";
import EmptyLayout from "../layout/EmptyLayout.vue";

Vue.use(VueRouter);

// 参考 https://pro.antdv.com/docs/router-and-nav
export const routes = [
  {
    path: '/redirect',
    component: EmptyLayout,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: redirect
      }
    ]
  },
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: HomeView,
        meta: { title: "Home", icon: "dashboard" },
      },
      {
        path: "form",
        component: EmptyLayout,
        redirect: "string",
        name: "form",
        meta: { title: "Components", icon: "form" },
        children: [
          {
            path: "string",
            name: "string",
            component: StringView,
            meta: { title: "String" },
          },
          {
            path: "boolean",
            name: "boolean",
            component: BooleanView,
            meta: { title: "Boolean" },
          },
          {
            path: "object",
            name: "object",
            component: ObjectView,
            meta: { title: "Object" },
          },
          {
            path: "array",
            name: "array",
            component: ArrayView,
            meta: { title: "Array" },
          },
          {
            path: "autoComplete",
            name: "autoComplete",
            component: AutoCompleteView,
            meta: { title: "AutoComplete" },
          },
          {
            path: "checkbox",
            name: "checkbox",
            component: CheckboxView,
            meta: { title: "Checkbox" },
          },
          {
            path: 'date',
            name: 'date',
            component: DateView,
            meta: { title: "Date" },
          },
          {
            path: 'number',
            name: 'number',
            component: NumberView,
            meta: { title: "Number" },
          },
          {
            path: 'time',
            name: 'time',
            component: TimeView,
            meta: { title: "Time" },
          },
          {
            path: 'text',
            name: 'text',
            component: TextView,
            meta: { title: "Text" },
          },
          {
            path: 'radio',
            name: 'radio',
            component: RadioView,
            meta: { title: "Radio" },
          },
          {
            path: 'textarea',
            name: 'textarea',
            component: TextareaView,
            meta: { title: "Textarea" },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
