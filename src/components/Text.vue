<template>
  <div>
    <a-form-model-item :labelCol="labelCol" :wrapperCol="wrapperCol">
      <template #label>
        <span v-if="meta.title" class="v__label-text">{{ meta.title }}</span>
      </template>

      <!-- 内容展示的优先级 slotNameOfDefault/html/text-->
      <template v-if="ui.slotNameOfDefault">
        <slot :name="ui.slotNameOfDefault"></slot>
      </template>
      <template v-else>
        <span v-if="ui.html" v-html="ui.html"></span>
        <span v-else v-text="displayValue"></span>
      </template>

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
  inject: ["state"],
  props: {
    id: String,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  mixins: [componentMixin],
  data() {
    return {
      context: new BaseMeta(this.state, this.id),
      displayValue: "",
    };
  },
  computed: {
    ui() {
      return Object.assign({}, this.state.ui, this.meta.ui);
    },
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
<style lang="less" scoped></style>
