<template>
  <v-wrapper :id="id" :meta="meta">
    <!-- 参考受控组件：value 和 onChange 需要配合使用 -->
    <a-time-picker
      v-if="ui.value"
      class="v__time"
      v-bind="bindings"
      :defaultValue="meta.default"
      :disabled="meta.readOnly"
      :open.sync="context.open"
      @change="change"
      @openChange="openChange"
    >
      <template v-if="ui.slotNameOfAddon" v-slot:addon>
        <slot :name="ui.slotNameOfAddon" v-bind:context="context"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfClearIcon" v-slot:clearIcon>
        <slot :name="ui.slotNameOfClearIcon"></slot>
      </template>
    </a-time-picker>
    <!-- 参考受控组件：直接使用v-model -->
    <a-time-picker
      v-else
      class="v__time"
      v-model="value"
      v-bind="bindings"
      :defaultValue="meta.default"
      :disabled="meta.readOnly"
      :open.sync="context.open"
      @change="change"
      @openChange="openChange"
    >
      <template v-if="ui.slotNameOfAddon" v-slot:addon>
        <slot :name="ui.slotNameOfAddon" v-bind:context="context"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
      <template v-if="ui.slotNameOfClearIcon" v-slot:clearIcon>
        <slot :name="ui.slotNameOfClearIcon"></slot>
      </template>
    </a-time-picker>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
import { TimePicker } from "ant-design-vue";
import { getBindings } from "@/utils/register.factory.js";
export default {
  name: "v-time",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
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
    bindings() {
      return getBindings(Object.keys(TimePicker.props), this.ui);
    },
  },
  methods: {
    openChange(open) {
      this.context.open = open;

      if (this.ui && this.ui.openChange) {
        this.ui.openChange(open);
      }
    },
    change(time, timeString) {
      if (this.ui && this.ui.change) {
        this.ui.change(time, timeString);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
