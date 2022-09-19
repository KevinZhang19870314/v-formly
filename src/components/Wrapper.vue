<template>
  <a-form-model-item :labelCol="labelCol" :wrapperCol="wrapperCol">
    <template #label>
      <a-col class="ant-form-item-label">
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
      </a-col>
    </template>
    <slot></slot>
    <div v-if="error" class="ant-form-item-explain ant-form-item-explain-error">
      <div>{{ error }}</div>
    </div>
    <div
      v-if="schema.description"
      class="ant-form-item-extra"
      v-html="schema.description"
    ></div>
  </a-form-model-item>
</template>
<script>
import Vue from "vue";
import { getUI, getLayout, FORM_ERROR_CHANGE } from "@/utils/global.js";
export default {
  name: "v-component-wrapper",
  props: {
    id: String,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  data: () => {
    return {
      error: "",
      layout: getLayout(),
    };
  },
  computed: {
    schema: function () {
      return this.meta;
    },
    ui: function () {
      return Object.assign({}, getUI(), this.meta.ui);
    },
    oh: function () {
      return Object.assign({}, getUI(), this.meta.ui).optionalHelp;
    },
    grid: function () {
      return getUI().grid || this.grid || {};
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
    Vue.bus.on(FORM_ERROR_CHANGE, (err) => {
      if (err.id === this.id) {
        // console.log(err);
        this.error = err.error ? err.error.keyword : undefined;
        console.log("this.error", this.error);
      }
    });
  },
};
</script>
<style lang="less"></style>
