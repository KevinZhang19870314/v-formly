<template>
  <a-form-model-item>
    <a-col class="ant-form-item-label" :span="ui.spanLabel">
      <label>
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
      </label>
    </a-col>
    <a-col
      class="ant-form-item-control"
      :span="ui.spanControl"
      :offset="ui.offsetControl"
    >
      <div class="ant-form-item-control-input">
        <div class="ant-form-item-control-input-content">
          <slot></slot>
        </div>
      </div>
      <div
        v-if="error"
        class="ant-form-item-explain ant-form-item-explain-error"
      >
        <div>{{ error }}</div>
      </div>
      <div
        v-if="schema.description"
        class="ant-form-item-extra"
        v-html="schema.description"
      ></div>
    </a-col>
  </a-form-model-item>
</template>
<script>
import { getUI } from "@/utils/global.js";
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
  },
};
</script>
<style lang="less">

</style>
