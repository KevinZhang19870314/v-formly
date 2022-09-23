<template>
  <a-form-model-item
    :labelCol="labelCol"
    :wrapperCol="wrapperCol"
    :required="ui.showRequired"
    :class="{ 'has-error': error }"
  >
    <template #label>
      <span class="v__label-text">{{ schema.title }}</span>
      <span v-if="ui.optional || oh" class="v__optional">
        {{ ui.optional }}
        <a-tooltip
          v-if="oh"
          :title="oh.text"
          :placement="oh.placement"
          :trigger="oh.trigger"
          :overlayStyle="oh.overlayStyle"
          :mouseEnterDelay="oh.mouseEnterDelay"
          :mouseLeaveDelay="oh.mouseLeaveDelay"
          :overlayClassName="oh.overlayClassName"
        >
          <a-icon :type="oh.icon" />
        </a-tooltip>
      </span>
    </template>
    <slot></slot>
    <div
      v-if="schema.description"
      class="ant-form-extra"
      v-html="schema.description"
    ></div>
    <div v-if="error" class="ant-form-explain">
      {{ error }}
    </div>
  </a-form-model-item>
</template>
<script>
import Vue from "vue";
import { FORM_ERROR_CHANGE } from "@/utils/consts.js";
export default {
  name: "v-wrapper",
  inject: ["state"],
  props: {
    id: String,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      error: "",
      layout: this.state.layout,
    };
  },
  computed: {
    schema: function () {
      return this.meta;
    },
    ui: function () {
      return Object.assign({}, this.state.ui, this.meta.ui);
    },
    oh: function () {
      return Object.assign({}, this.state.ui, this.meta.ui).optionalHelp;
    },
    grid: function () {
      return this.state.ui.grid || this.grid || {};
    },
    labelCol: function () {
      return this.layout === "vertical" ? null : { span: this.ui.spanLabel };
    },
    wrapperCol: function () {
      return this.layout === "vertical"
        ? null
        : { span: this.ui.spanControl, offset: this.ui.offsetControl || 0 };
    },
  },
  created() {
    Vue.bus.on(FORM_ERROR_CHANGE, this.formErrorChangeCallback);
  },
  beforeDestroy() {
    Vue.bus.off(FORM_ERROR_CHANGE, this.formErrorChangeCallback);
  },
  methods: {
    formErrorChangeCallback(err) {
      if (err.id === this.id) {
        this.error = err.error ? err.error.keyword : undefined;
      }
    },
  },
};
</script>
<style lang="less"></style>
