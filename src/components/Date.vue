<template>
  <v-wrapper :id="id" :meta="meta">
    <a-month-picker
      class="v__date"
      v-if="mode === 'month'"
      v-model="value"
      :valueFormat="ui.valueFormat"
      :disabled="meta.readOnly"
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
    <a-week-picker
      class="v__date"
      v-if="mode === 'week'"
      v-model="value"
      :valueFormat="ui.valueFormat"
      :disabled="meta.readOnly"
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
    ></a-week-picker>
    <a-range-picker
      class="v__date"
      v-if="mode === 'range'"
      v-model="value"
      :valueFormat="ui.valueFormat"
      :disabled="meta.readOnly"
      :size="ui.size"
      :format="ui.format"
      :allowClear="ui.allowClear"
      :disabledDate="ui.disabledDate"
      :locale="ui.locale"
      :placeholder="ui.placeholder"
      :popupStyle="ui.popupStyle"
      :dropdownClassName="ui.dropdownClassName"
      :inputReadOnly="ui.inputReadOnly"
      :disabledTime="ui.disabledTime"
      :ranges="ui.ranges"
      :showTime="ui.showTime"
      @openChange="openChange($event)"
      @change="change"
    ></a-range-picker>
    <a-date-picker
      class="v__date"
      v-if="mode === 'date'"
      v-model="value"
      :valueFormat="ui.valueFormat"
      :disabled="meta.readOnly"
      :size="ui.size"
      :format="ui.format"
      :allowClear="ui.allowClear"
      :disabledDate="ui.disabledDate"
      :locale="ui.locale"
      :placeholder="ui.placeholder"
      :popupStyle="ui.popupStyle"
      :dropdownClassName="ui.dropdownClassName"
      :inputReadOnly="ui.inputReadOnly"
      :showToday="ui.showToday"
      :showTime="ui.showTime"
      @ok="ok($event)"
      @change="change"
    ></a-date-picker>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-date",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
    };
  },
  computed: {
    mode() {
      return this.ui.mode || "date";
    },
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
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
    ok(value) {
      if (this.ui.ok) {
        this.ui.ok(value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
