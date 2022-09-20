<template>
  <v-wrapper :id="id" :meta="meta">
    <a-input
      :addonAfter="ui.addonAfter"
      :addonBefore="ui.addonBefore"
      :defaultValue="ui.defaultValue"
      :disabled="ui.disabled"
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
// import Vue from "vue";
import VWrapper from "./Wrapper.vue";
// import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
import { StringMeta } from "../meta/string.meta.js";
export default {
  name: "v-string",
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
      stringContext: new StringMeta(this.state, this.id),
    };
  },
  created() {
    console.log("String.vue created");
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
        return this.stringContext.value;
      },
      set: function (val) {
        this.stringContext.value = val || undefined;
      },
    },
  },
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }

      // Vue.bus.emit(FORM_VALUE_CHANGE, {
      //   id: this.id,
      //   value: this.value ? this.value : undefined,
      // });
    },
  },
};
</script>
<style lang="less" scoped></style>
