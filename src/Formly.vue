<template>
  <a-form-model
    :layout="layout"
    :class="{
      v__inline: layout === 'inline',
      v__horizontal: layout === 'horizontal',
    }"
  >
    <div>{{ layout + "123" }}</div>
    <v-formly-item id="root" :depth="0" :meta="objectMeta"></v-formly-item>
  </a-form-model>
</template>
<script>
import Vue from "vue";
import VFormlyItem from "@/FormlyItem.vue";
import VObject from "@/components/Object.vue";
import VString from "@/components/String.vue";
import { FORM_VALUE_CHANGE, updateObjProp } from "@/utils/global.js";
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
    };
  },
  created() {
    if (!this.schema || typeof this.schema.properties === "undefined")
      throw new Error(`Invalid Schema`);

    this.schema.type = "object";
    this.objectMeta = Object.assign({}, this.objectMeta, this.schema);
    this.formData = Object.assign({}, this.formData, this.value);

    // TODO: testing, need to split to new rigister factory file
    Vue.component("v-object", VObject);
    Vue.component("v-string", VString);
  },
  mounted() {
    this.initFormData(this.formData, this.schema.properties);
    Vue.bus.on(FORM_VALUE_CHANGE, (change) => {
      // TODO: ajv validate
      this.applyFormData(this.formData, change.id, change.value);
      // TODO: emit value
      console.log(this.formData);
    });
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
    applyFormData(formData, id, value) {
      updateObjProp(formData, id, value);
    },
  },
};
</script>
<style lang="less"></style>
