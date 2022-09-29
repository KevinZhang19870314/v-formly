<template>
  <div class="v__formly">
    <a-form-model
      class="v"
      :layout="layout"
      :class="{
        v__inline: layout === 'inline',
        v__horizontal: layout === 'horizontal',
      }"
    >
      <v-formly-item id="root" :meta="objectMeta">
        <template v-for="slotName in slotsName" v-slot:[slotName]="{context}">
          <slot :name="slotName" v-bind:context="context">
            {{ "formly slot" + JSON.stringify(context) }}
          </slot>
        </template>
      </v-formly-item>
    </a-form-model>
  </div>
</template>
<script>
import VFormlyItem from "@/FormlyItem.vue";
import VObject from "@/components/Object.vue";
import VString from "@/components/String.vue";
import VBoolean from "@/components/Boolean.vue";
import VArray from "@/components/Array.vue";
import VAutoComplete from "@/components/AutoComplete.vue";
import VCheckbox from "@/components/Checkbox.vue";
import VDate from "@/components/Date.vue";
import VNumber from "@/components/Number.vue";
import VTime from "@/components/Time.vue";
import VText from "@/components/Text.vue";
import VRadio from "@/components/Radio.vue";
import VTextarea from "@/components/Textarea.vue";
import { FormItemContext } from "./utils/context.js";
import { Global } from "./utils/global.js";
import { ValidateFactory } from "./utils/validate.factory";
import { slotsMixin } from "./mixin/slots.mixin.js";
import { registerFormComponent } from "./utils/register.factory.js";
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
    this.objectMeta = Object.assign({}, this.objectMeta, this.schema);
    this.formData = Object.assign({}, this.formData, this.value);

    this.registerBuildInComponents();

    this.globalInstance.schema = this.objectMeta;
    this.globalInstance.formData = this.formData;
    this.initFormData(this.globalInstance.formData, this.schema.properties);

    this.globalInstance.context = new FormItemContext();

    this.globalInstance.validate = new ValidateFactory(this.globalInstance);
  },
  mounted() {
    this.$emit("value-change", this.formData);
  },
  methods: {
    initFormData(formData, properties) {
      Object.keys(properties).forEach((key) => {
        const meta = properties[key];
        if (meta.type === "null") return; 
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
    validate() {
      return this.globalInstance.validate.runValidateForm();
    },
    registerBuildInComponents() {
      registerFormComponent("v-object", VObject);
      registerFormComponent("v-string", VString);
      registerFormComponent("v-boolean", VBoolean);
      registerFormComponent("v-array", VArray);
      registerFormComponent("v-autocomplete", VAutoComplete);
      registerFormComponent("v-checkbox", VCheckbox);
      registerFormComponent("v-date", VDate);
      registerFormComponent("v-number", VNumber);
      registerFormComponent("v-integer", VNumber);
      registerFormComponent("v-time", VTime);
      registerFormComponent("v-text", VText);
      registerFormComponent("v-radio", VRadio);
      registerFormComponent("v-textarea", VTextarea);
    },
  },
};
</script>
<style lang="less" scoped></style>
