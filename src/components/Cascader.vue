<template>
  <v-wrapper :id="id" :meta="meta">
    <a-cascader
      v-model="value"
      v-bind="bindings"
      :disabled="meta.readOnly"
      :options="meta.enum"
      @change="change"
      @popupVisibleChange="popupVisibleChange"
      @search="search"
      @blur="blur"
      @focus="focus"
    >
      <!-- default -->
      <template v-if="ui.slotNameOfCascaderDefault">
        <slot :name="ui.slotNameOfCascaderDefault"></slot>
      </template>
      <!-- suffixIcon -->
      <template v-if="ui.slotNameOfCascaderSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfCascaderSuffixIcon"></slot>
      </template>
      <!-- displayRender -->
      <template v-if="ui.slotNameOfDisplayRender" v-slot:displayRender="slotProps">
        <slot :name="ui.slotNameOfDisplayRender" v-bind="slotProps"></slot>
      </template>
    </a-cascader>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
import { Cascader } from "ant-design-vue";
import { getBindings } from "@/utils/register.factory.js";
export default {
  name: "v-cascader",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
    };
  },
  computed: {
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
        this.context.value = val || undefined;
      },
    },
    bindings() {
      return getBindings(Object.keys(Cascader.props), this.ui);
    },
  },
  created() {},
  methods: {
    // 选择完成后的回调
    change(value, option) {
      if (this.ui.change) this.ui.change(value, option);
    },
    popupVisibleChange(visible) {
      if (this.ui.popupVisibleChange) this.ui.popupVisibleChange(visible);
    },
    // 输入框变化时的回调
    search(value) {
      if (this.ui.search) this.ui.search(value);
    },
    blur(e) {
      if (this.ui.blur) this.ui.blur(e);
    },
    focus(e) {
      if (this.ui.focus) this.ui.focus(e);
    },
  },
};
</script>
<style lang="less" scoped></style>
