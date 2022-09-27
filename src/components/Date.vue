<template>
  <v-wrapper :id="id" :meta="meta">
    <a-month-picker
      class="v__date"
      v-if="mode === 'month'"
      v-model="value"
      :disabled="schema.readOnly"
      :size="ui.size"
      :format="ui.format"
      :allowClear="ui.allowClear"
      :disabledDate="ui.disabledDate"
      :locale="ui.locale"
      :placeholder="ui.placeholder"
      :popupStyle="ui.popupStyle"
      :dropdownClassName="ui.dropdownClassName"
      :inputReadOnly="ui.inputReadOnly"
      @openChange="openChange($event)"
      @change="change"
    ></a-month-picker>
    <a-month-picker class="v__date" v-if="mode === 'week'"></a-month-picker>
    <a-month-picker class="v__date" v-if="mode === 'range'"></a-month-picker>
    <a-month-picker class="v__date" v-if="mode === 'date'"></a-month-picker>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { DateMeta } from "../meta/date.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-date",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new DateMeta(this.state, this.id),
    };
  },
  computed: {
    mode: function () {
      return this.ui.mode || "date";
    },
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
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
    openChange(status) {
      if (this.ui.openChange) {
        this.ui.openChange(status);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
