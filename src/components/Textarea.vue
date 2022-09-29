<template>
  <v-wrapper :id="id" :meta="meta">
    <a-textarea
      :id="ui.id"
      :disabled="schema.readOnly"
      :placeholder="ui.placeholder"
      :auto-size="autosize"
      :maxLength="schema.maxLength || null"
      :allowClear="ui.allowClear"
      v-model="value"
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
      context: new StringMeta(this.state, this.id),
      autosize: true,
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
    const { autosize } = this.ui;
    if (autosize != null) {
      this.autosize = autosize;
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
