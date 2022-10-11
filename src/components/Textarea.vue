<template>
  <v-wrapper :id="id" :meta="meta">
    <a-textarea
      v-model="value"
      v-bind="ui"
      :disabled="meta.readOnly"
      :autoSize="autoSize"
      :maxLength="meta.maxLength || null"
      @change="change"
      @focus="focus($event)"
      @blur="blur($event)"
      @pressEnter="pressEnter($event)"
    >
    </a-textarea>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-textarea",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
      autoSize: true,
    };
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
  created() {
    const { autoSize } = this.ui;
    if (autoSize != null) {
      this.autoSize = autoSize;
    }
  },
  mounted() {
    this.applyInitValue();
  },
  methods: {
    change() {
      if (this.ui.change) this.ui.change(this.value);
    },
    focus(e) {
      if (this.ui.focus) this.ui.focus(e);
    },
    blur(e) {
      if (this.ui.blur) this.ui.blur(e);
    },
    pressEnter(e) {
      if (this.ui.pressEnter) this.ui.pressEnter(e);
    },
  },
};
</script>
<style lang="less" scoped></style>
