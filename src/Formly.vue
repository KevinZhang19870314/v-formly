<template>
  <div>
    <a-form-model
      class="v"
      :layout="layout"
      :class="{
        v__inline: layout === 'inline',
        v__horizontal: layout === 'horizontal',
      }"
    >
      <v-formly-item id="root" :meta="objectMeta">
        <template v-for="slotName in slotsName" v-slot:[slotName]>
          <slot :name="slotName">
            {{ "formly-item inner 123" }}
          </slot>
        </template>
      </v-formly-item>
    </a-form-model>
  </div>
</template>
<script>
import Vue from "vue";
import VFormlyItem from "@/FormlyItem.vue";
import VObject from "@/components/Object.vue";
import VString from "@/components/String.vue";
import VBoolean from "@/components/Boolean.vue";
import VArray from "@/components/Array.vue";
import VAutoComplete from "@/components/AutoComplete.vue";
import { FormItemContext } from "./utils/context.js";
import { Global } from "./utils/global.js";
import { ValidateFactory } from "./utils/validate.factory";
import { slotsMixin } from "./mixin/slots.mixin.js";
export default {
  name: "v-formly",
  components: { VFormlyItem },
  mixins: [slotsMixin],
  model: {
    prop: "value",
    event: "value-change",
  },
  props: {
    value: Object,
    layout: {
      type: String,
      default: "horizontal",
    },
    schema: {},
  },
  data() {
    return {
      objectMeta: {},
      formData: {},
      globalInstance: new Global(),
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
    Vue.component("v-boolean", VBoolean);
    Vue.component("v-array", VArray);
    Vue.component("v-autocomplete", VAutoComplete);

    this.globalInstance.schema = this.objectMeta;
    this.globalInstance.formData = this.formData;
    this.initFormData(this.globalInstance.formData, this.schema.properties);

    this.globalInstance.context = new FormItemContext();

    this.globalInstance.validate = new ValidateFactory(this.globalInstance);
  },
  mounted() {
    console.log("formly mounted");
    this.$emit("value-change", this.formData);
  },
  methods: {
    initFormData(formData, properties) {
      Object.keys(properties).forEach((key) => {
        const meta = properties[key];
        switch (meta.type) {
          case "object":
            formData[key] = formData[key] || {};
            this.initFormData(formData[key], meta.properties);
            break;
          case "array":
            formData[key] = formData[key] || [];
            break;
          case "boolean":
            formData[key] = formData[key] || false;
            break;
          default:
            formData[key] = formData[key] || undefined;
            break;
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
