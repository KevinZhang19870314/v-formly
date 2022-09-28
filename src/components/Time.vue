<template>
  <v-wrapper :id="id" :meta="meta">
    <!-- 参考受控组件：value 和 onChange 需要配合使用 -->
    <a-time-picker
      v-if="ui.value"
      class="v__time"
      :addon="ui.slotNameOfAddon ? undefined : ui.addon"
      :allowClear="ui.allowClear"
      :autoFocus="ui.autoFocus"
      :clearText="ui.clearText"
      :defaultValue="ui.defaultValue"
      :disabled="schema.readOnly"
      :disabledHours="ui.disabledHours"
      :disabledMinutes="ui.disabledMinutes"
      :disabledSeconds="ui.disabledSeconds"
      :format="ui.format"
      :getPopupContainer="ui.getPopupContainer"
      :hideDisabledOptions="ui.hideDisabledOptions"
      :hourStep="ui.hourStep"
      :inputReadOnly="ui.inputReadOnly"
      :minuteStep="ui.minuteStep"
      :open.sync="context.open"
      :placeholder="ui.placeholder"
      :popupClassName="ui.popupClassName"
      :popupStyle="ui.popupStyle"
      :secondStep="ui.secondStep"
      :size="ui.size"
      :suffixIcon="ui.slotNameOfSuffixIcon ? undefined : ui.suffixIcon"
      :clearIcon="ui.slotNameOfClearIcon ? undefined : ui.clearIcon"
      :use12Hours="ui.use12Hours"
      :valueFormat="ui.valueFormat"
      :value="ui.value"
      @change="context.change"
      @openChange="context.openChange"
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
      :addon="ui.slotNameOfAddon ? undefined : ui.addon"
      :allowClear="ui.allowClear"
      :autoFocus="ui.autoFocus"
      :clearText="ui.clearText"
      :defaultValue="ui.defaultValue"
      :disabled="schema.readOnly"
      :disabledHours="ui.disabledHours"
      :disabledMinutes="ui.disabledMinutes"
      :disabledSeconds="ui.disabledSeconds"
      :format="ui.format"
      :getPopupContainer="ui.getPopupContainer"
      :hideDisabledOptions="ui.hideDisabledOptions"
      :hourStep="ui.hourStep"
      :inputReadOnly="ui.inputReadOnly"
      :minuteStep="ui.minuteStep"
      :open.sync="context.open"
      :placeholder="ui.placeholder"
      :popupClassName="ui.popupClassName"
      :popupStyle="ui.popupStyle"
      :secondStep="ui.secondStep"
      :size="ui.size"
      :suffixIcon="ui.slotNameOfSuffixIcon ? undefined : ui.suffixIcon"
      :clearIcon="ui.slotNameOfClearIcon ? undefined : ui.clearIcon"
      :use12Hours="ui.use12Hours"
      :valueFormat="ui.valueFormat"
      @change="context.change"
      @openChange="context.openChange"
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
import { TimeMeta } from "../meta/time.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-time",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new TimeMeta(this.state, this.id, this.meta),
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
  mounted() {
    this.applyInitValue();
  },
};
</script>
<style lang="less" scoped></style>
