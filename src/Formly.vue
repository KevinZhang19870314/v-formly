<template>
  <a-form-model
    class="v"
    :layout="layout"
    :class="{
      v__inline: layout === 'inline',
      v__horizontal: layout === 'horizontal',
    }"
  >
    <v-formly-item id="root" :meta="objectMeta"></v-formly-item>
  </a-form-model>
</template>
<script>
import Vue from "vue";
import VFormlyItem from "@/FormlyItem.vue";
import VObject from "@/components/Object.vue";
import VString from "@/components/String.vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
import { FormItemContext } from "./utils/context.js";
import { Global } from "./utils/global.js";
import { ValidateFactory } from "./utils/validate.factory";
export default {
  name: "v-formly",
  components: { VFormlyItem },
  model: {
    prop: "value",
    event: FORM_VALUE_CHANGE,
  },
  props: {
    value: Object,
    layout: {
      type: String,
      default: "horizontal",
    },
    schema: {},
  },
  data: () => {
    return {
      objectMeta: {},
      formData: {},
      globalInstance: new Global(),
      validateFactory: null,
    };
  },
  provide() {
    return {
      state: this.globalInstance,
    };
  },
  created() {
    if (!this.schema || typeof this.schema.properties === "undefined")
      throw new Error(`Invalid Schema`);

    console.log("formly created");
    this.globalInstance.layout = this.layout;
    this.schema.type = "object";
    this.objectMeta = Object.assign({}, this.objectMeta, this.schema);
    this.formData = Object.assign({}, this.formData, this.value);

    // TODO: testing, need to split to new rigister factory file
    Vue.component("v-object", VObject);
    Vue.component("v-string", VString);

    this.globalInstance.schema = this.objectMeta;
    this.globalInstance.formData = this.formData;
    this.globalInstance.context = new FormItemContext();

    this.validateFactory = new ValidateFactory(this.globalInstance);
    this.globalInstance.validate = this.validateFactory;
  },
  mounted() {
    console.log("formly mounted");
    this.initFormData(this.formData, this.schema.properties);
    console.log(this.formData);
    // TODO: emit value for v-model
  },
  methods: {
    initFormData(formData, properties) {
      Object.keys(properties).forEach((key) => {
        const meta = properties[key];
        if (meta.type === "object") {
          formData[key] = {};
          this.initFormData(formData[key], meta.properties);
        } else {
          formData[key] = undefined;
        }
      });
    },
    getContext(id) {
      return this.globalInstance.context.getContext(id);
    },
  },
};
</script>
<style lang="less" scoped></style>
