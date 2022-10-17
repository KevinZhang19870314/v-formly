<template>
  <div :style="{ display: layout === 'inline' ? 'inline-block' : 'block' }">
    <component
      v-bind:is="currentComponent"
      :id="id"
      :meta="meta"
      v-if="visible"
    >
      <template v-for="slotName in slotsName" v-slot:[slotName]="slotProps">
        <slot :name="slotName" v-bind="{ ...slotProps }"></slot>
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
    currentComponent() {
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
    this.applyIgnoreErrors(this.visible, this.id);

    Vue.bus.on(`${FORM_VALUE_CHANGE}-${this.state._formId}`, (change) => {
      this.visible = this.visibleIf(
        this.state.context,
        this.meta,
        this.visible,
        {
          id: change.id,
          value: change.value,
        }
      );
      // TODO: 当visible为false的时候，需要忽略当前字段的校验
      const context = this.state.context.getContext(this.id);
      if (context) {
        this.applyIgnoreErrors(this.visible, context.id);
      }
    });
  },
  methods: {
    applyIgnoreErrors(visible, id) {
      if (visible) {
        this.state._ignoreErrorIds = this.state._ignoreErrorIds.filter(
          (f) => f !== id
        );
      } else {
        if (this.state._ignoreErrorIds.indexOf(id) === -1) {
          this.state._ignoreErrorIds.push(id);
        }
      }
    },
  },
};
</script>
<style lang="" scoped></style>
