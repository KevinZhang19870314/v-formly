<template>
  <component
    v-bind:is="currentComponent"
    :id="id"
    :meta="meta"
    v-if="visible"
  ></component>
</template>
<script>
import Vue from "vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
import { visibleIfMixin } from "./mixin/visible-if.mixin.js";
export default {
  name: "v-formly-item",
  inject: ["state"],
  mixins: [visibleIfMixin],
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
      visible: true,
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

    this.visible = this.show;

    Vue.bus.on(FORM_VALUE_CHANGE, (change) => {
      this.visible = this.visibleIf(
        this.state.context,
        this.meta,
        this.visible,
        {
          id: change.id,
          value: change.value,
        }
      );
    });
  },
};
</script>
<style lang="" scoped></style>
