<template>
  <v-wrapper :id="id" :meta="meta">
    <a-slider
      :id="ui.id"
      :disabled="!!schema.readOnly"
      :range="!!ui.range"
      :vertical="!!ui.vertical"
      :dots="!!ui.dots"
      :min="min"
      :max="max"
      :step="step"
      :marks="marks"
      :included="included"
      :tipFormatter="hiddenTooltip ? null : _formatter"
      :tooltipVisible="ui.tooltipVisible"
      v-model="value"
      @change="change"
      @afterChange="afterChange"
    >
    </a-slider>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "../meta/number.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-slider",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new NumberMeta(this.state, this.id, this.meta, "slider"),
      min: 0,
      max: 100,
      step: 1,
      marks: undefined,
      included: true,
    };
  },
  computed: {
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
        if (this.ui.range) {
          this.context.value = val || [];
        } else {
          this.context.value = typeof val == "number" ? val : undefined;
        }
      },
    },
    hiddenTooltip() {
      return this.ui.formatter === null;
    },
  },
  created() {
    const { minimum, maximum, multipleOf } = this.schema;
    this.min = minimum || 0;
    this.max = maximum || 100;
    this.step = multipleOf || 1;

    const { marks, included } = this.ui;
    this.marks = marks || undefined;
    this.included = typeof included === "undefined" ? true : included;
  },
  mounted() {
    this.applyInitValue();
  },
  methods: {
    _formatter(value) {
      const { formatter } = this.ui;
      if (formatter) return formatter(value);
      return `${value}`;
    },
    change(value) {
      if (this.ui.change) this.ui.change(value);
    },
    afterChange(value) {
      if (this.ui.afterChange) this.ui.afterChange(value);
    },
  },
};
</script>
<style lang="less" scoped></style>
