<template>
  <div :style="{ display: layout === 'inline' ? 'inline-block' : 'block' }">
    <component
      v-bind:is="currentComponent"
      :id="id"
      :meta="meta"
      v-if="visible"
    >
      <template v-for="slotName in slotsName" v-slot:[slotName]="{ context }">
        <slot :name="slotName" v-bind:context="context">
          {{ "formly-item slot" }}
        </slot>
      </template>
    </component>
  </div>
</template>
<script>
import Vue from "vue";
import { FORM_VALUE_CHANGE } from "@/utils/consts.js";
import { visibleIfMixin } from "./mixin/visible-if.mixin.js";
import { slotsMixin } from "./mixin/slots.mixin.js";
export default {
  name: "v-formly-item",
  inject: ["state"],
  mixins: [visibleIfMixin, slotsMixin],
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
      const type = (this.meta.ui && this.meta.ui.component) || this.meta.type;
      return `v-${type}`;
    },
    layout: function () {
      return this.state.layout;
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
