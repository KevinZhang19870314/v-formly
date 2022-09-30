<template>
  <div>
    <a-form-model-item
      :labelCol="labelCol"
      :wrapperCol="wrapperCol"
      :class="{ 'no-label': !meta.title }"
    >
      <!-- label -->
      <template v-if="meta.title" #label>
        <span class="v__label-text">{{ meta.title }}</span>
      </template>
      <!-- content: 内容展示的优先级 slotNameOfDefault/html/text-->
      <template v-if="ui.slotNameOfDefault">
        <slot :name="ui.slotNameOfDefault"></slot>
      </template>
      <template v-else>
        <span v-if="ui.html" v-html="ui.html" class="v__content-text"></span>
        <span v-else v-text="displayValue" class="v__content-text"></span>
      </template>
      <!-- description -->
      <template v-if="meta.description">
        <div class="ant-form-extra" v-html="meta.description"></div>
      </template>
    </a-form-model-item>
  </div>
</template>
<script>
import { BaseMeta } from "../meta/base.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-text",
  mixins: [componentMixin],
  data() {
    return {
      context: new BaseMeta(this.state, this.id, this.meta),
      displayValue: "",
    };
  },
  computed: {
    labelCol() {
      return this.state.layout === "vertical"
        ? null
        : { span: this.ui.spanLabel };
    },
    wrapperCol() {
      return this.state.layout === "vertical"
        ? null
        : { span: this.ui.spanControl, offset: this.ui.offsetControl || 0 };
    },
  },
  created() {
    this.displayValue =
      typeof this.ui.text === "function" ? this.ui.text() : this.ui.text;
  },
};
</script>
<style lang="less" scoped>
.no-label :deep(.ant-form-item-control) {
  line-height: normal;
}
</style>
