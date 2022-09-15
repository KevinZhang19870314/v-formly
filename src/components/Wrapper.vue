<template>
  <a-form-model-item>
    <a-col class="ant-form-item-label">
      <label>
        <span>{{ schema.title }}</span>
        <span v-if="ui.optional || oh">
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
    <a-col class="ant-form-item-control">
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
import { getSchema, getUI } from "@/utils/global.js";
export default {
  name: "v-component-wrapper",
  data: () => {
    return {
      schema: getSchema(),
      ui: getUI(),
      oh: getUI().optionalHelp,
      error: "",  // TODO
    };
  },
};
</script>
<style lang="less" scoped></style>
