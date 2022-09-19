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
      v-model="value"
      @change="change"
    >
    </a-input>
  </v-wrapper>
</template>
<script>
import Vue from "vue";
import VWrapper from "./Wrapper.vue";
import { FORM_VALUE_CHANGE, getContext } from "@/utils/global.js";
import { StringMeta } from "@/meta/string.meta.js";
export default {
  name: "v-string",
  components: { VWrapper },
  props: {
    id: String,
    depth: Number,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  data: () => {
    return {
      value: "",
    };
  },
  created() {
    // console.log("v-string", this.id, this.depth, this.meta);
    const metaInstance = new StringMeta(getContext(), this.id);
    console.log(metaInstance);
  },
  computed: {
    ui: function () {
      return this.meta.ui || {};
    },
    schema: function () {
      return this.meta || {};
    },
  },
  methods: {
    change() {
      Vue.bus.emit(FORM_VALUE_CHANGE, {
        id: this.id,
        depth: this.depth,
        value: this.value ? this.value : undefined,
      });
    },
  },
};
</script>
<style lang="less"></style>
