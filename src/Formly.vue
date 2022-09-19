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
import {
  FORM_VALUE_CHANGE,
  FORM_ERROR_CHANGE,
  updateObjProp,
  setLayout,
  setContext,
} from "@/utils/global.js";
import { ajvValidate, getAjvError } from "@/utils/validate.factory.js";
import { FormItemContext } from "@/utils/context.js";
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

    console.log("formly created");
    setLayout(this.layout);
    this.schema.type = "object";
    this.objectMeta = Object.assign({}, this.objectMeta, this.schema);
    this.formData = Object.assign({}, this.formData, this.value);

    // TODO: testing, need to split to new rigister factory file
    Vue.component("v-object", VObject);
    Vue.component("v-string", VString);

    const context = new FormItemContext();
    setContext(context);
  },
  mounted() {
    console.log("formly mounted");
    this.initFormData(this.formData, this.schema.properties);
    console.log(this.formData);
    Vue.bus.on(FORM_VALUE_CHANGE, (change) => {
      this.applyFormData(change.id, change.value);
      this.validateFormData(change.id);

      // TODO: emit value for v-model
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
    applyFormData(id, value) {
      updateObjProp(this.formData, id, value);
    },
    validateFormData(id) {
      const validate = ajvValidate(this.schema);
      const valid = validate(this.formData);
      if (!valid) {
        console.log(validate.errors);
        const error = getAjvError(id, validate.errors);
        Vue.bus.emit(FORM_ERROR_CHANGE, {
          id: id,
          error: error,
        });
      } else {
        Vue.bus.emit(FORM_ERROR_CHANGE, {
          id: id,
          error: undefined,
        });
      }
    },
  },
};
</script>
<style lang="less"></style>
