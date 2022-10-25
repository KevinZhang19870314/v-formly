<template>
  <v-wrapper :id="id" :meta="meta">
    <a-rate
      v-bind="bindings"
      v-model="value"
      :disabled="meta.readOnly"
      :count="meta.maximum || 5"
      :allowClear="allowClear"
      @change="change"
      @hoverChange="hoverChange"
    >
      <template v-if="ui.slotNameOfCharacter" v-slot:character>
        <slot :name="ui.slotNameOfCharacter"></slot>
      </template>
    </a-rate>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "../meta/number.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
import { Rate } from "ant-design-vue";
import { getBindings } from "@/utils/register.factory.js";
export default {
  name: "v-rate",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new NumberMeta(this.state, this.id, this.meta),
      allowClear: true,
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
      return getBindings(Object.keys(Rate.props), this.ui);
    },
  },
  created() {
    const { allowClear } = this.ui;
    this.allowClear = typeof allowClear == "undefined" ? true : !!allowClear;
  },
  methods: {
    change(value) {
      if (this.ui.change) this.ui.change(value);
    },
    hoverChange(value) {
      if (this.ui.hoverChange) this.ui.hoverChange(value);
    },
  },
};
</script>
<style lang="less" scoped></style>
