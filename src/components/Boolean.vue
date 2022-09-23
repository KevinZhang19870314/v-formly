<template>
  <v-wrapper :id="id" :meta="meta">
    <a-switch
      class="v__boolean"
      v-model="value"
      :disabled="ui.disabled"
      :size="ui.size"
      :checkedChildren="ui.checkedChildren"
      :unCheckedChildren="ui.unCheckedChildren"
      @change="change"
    >
    </a-switch>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { BooleanMeta } from "../meta/boolean.meta.js";
export default {
  name: "v-boolean",
  components: { VWrapper },
  inject: ["state"],
  props: {
    id: String,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      context: new BooleanMeta(this.state, this.id),
    };
  },
  computed: {
    ui: function () {
      return this.meta.ui || {};
    },
    schema: function () {
      return this.meta || {};
    },
    value: {
      get: function () {
        return this.context.value;
      },
      set: function (val) {
        this.context.value = val || false;
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
