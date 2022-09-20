<template>
  <component
    v-bind:is="currentComponent"
    :id="id"
    :meta="meta"
    v-if="visibleIf"
  ></component>
</template>
<script>
import Vue from "vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
export default {
  name: "v-formly-item",
  inject: ["state"],
  props: {
    id: String,
    meta: {
      type: Object,
      default: () => {},
    },
    show: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      visibleIf: true,
    };
  },
  computed: {
    currentComponent: function () {
      return `v-${this.meta.type}`;
    },
  },
  mounted() {
    if (!this.meta.type)
      throw new Error(
        "Form item type must be one of these: number, string, boolean, array, object"
      );

    this.visibleIf = this.show;

    // TODO: 可能会有性能问题，当前没有指定是哪个字段导致此item的visibleIf，这样更灵活，但是
    // 会导致每个字段的change事件都会触发一遍这里的visibleIf
    Vue.bus.on(FORM_VALUE_CHANGE, (change) => {
      let visible = true;
      if (!this.meta.ui) {
        visible = true;
      } else if (typeof this.meta.ui.visibleIf === "boolean") {
        visible = this.meta.ui.visibleIf;
      } else if (typeof this.meta.ui.visibleIf === "function") {
        console.log(change);
        visible = this.meta.ui.visibleIf(
          this.state.context,
          change.id,
          change.value
        );
      } else {
        visible = true;
      }

      this.visibleIf = visible;
    });
  },
};
</script>
<style lang="" scoped></style>
