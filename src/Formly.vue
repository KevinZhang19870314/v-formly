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
import { FORM_VALUE_CHANGE, FORM_ERROR_CHANGE } from "@/utils/consts.js";
// import { ajvValidate, getAjvError } from "@/utils/validate.factory.js";
import { FormItemContext } from "./utils/context.js";
import { Global } from "./utils/global";
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
      global: this.globalInstance,
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

    this.globalInstance.context = new FormItemContext();

    this.validateFactory = new ValidateFactory(this.globalInstance);
    this.globalInstance.validate = this.validateFactory;
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
      this.globalInstance.updateObjProp(this.formData, id, value);
    },
    validateFormData(id) {
      const validate = this.validateFactory.ajvValidate(this.schema);
      const valid = validate(this.formData);
      if (!valid) {
        console.log(validate.errors);
        const error = this.validateFactory.getAjvError(id, validate.errors);
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
<style lang="less" scoped></style>
