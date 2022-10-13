<template>
  <v-wrapper :id="id" :meta="meta">
    <a-month-picker
      class="v__date"
      v-if="type === 'month'"
      v-model="value"
      v-bind="ui"
      :disabled="meta.readOnly"
      @openChange="openChange($event)"
      @change="change"
    >
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
    </a-month-picker>
    <a-week-picker
      class="v__date"
      v-if="type === 'week'"
      v-model="value"
      v-bind="ui"
      :disabled="meta.readOnly"
      @openChange="openChange($event)"
      @change="change"
    >
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
    </a-week-picker>
    <a-range-picker
      class="v__date"
      v-if="type === 'range'"
      v-model="value"
      v-bind="ui"
      :disabled="meta.readOnly"
      @openChange="openChange($event)"
      @change="change"
    >
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
    </a-range-picker>
    <a-date-picker
      class="v__date"
      v-if="type === 'date'"
      v-model="value"
      v-bind="ui"
      :disabled="meta.readOnly"
      @ok="ok($event)"
      @change="change"
    >
      <template v-if="ui.slotNameOfSuffixIcon" v-slot:suffixIcon>
        <slot :name="ui.slotNameOfSuffixIcon"></slot>
      </template>
    </a-date-picker>
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
    type() {
      return this.ui.type || "date";
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
