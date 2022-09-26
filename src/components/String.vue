<template>
  <v-wrapper :id="id" :meta="meta">
    <a-input
      :addonAfter="ui.addonAfter"
      :addonBefore="ui.addonBefore"
      :defaultValue="ui.defaultValue"
      :disabled="schema.readOnly"
      :id="ui.id"
      :maxLength="schema.maxLength"
      :prefix="ui.prefix"
      :size="ui.size"
      :suffix="ui.suffix"
      :allowClear="ui.allowClear"
      :placeholder="ui.placeholder"
      v-model="value"
      @change="change"
    >
    </a-input>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-string",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id),
    };
  },
  mounted() {
    this.applyInitValue();
  },
  computed: {
    value: {
      get: function () {
        return this.context.value;
      },
      set: function (val) {
        this.context.value = val || undefined;
      },
    },
  },
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
