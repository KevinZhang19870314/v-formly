<template>
  <v-wrapper :id="id" :meta="meta">
    <a-input-number
      class="v__number"
      :id="id"
      v-model="value"
      :disabled="schema.readOnly"
      :size="ui.size"
      :min="min"
      :max="max"
      :step="step"
      :formatter="formatter"
      :parser="parser"
      :precision="ui.precision"
      :placeholder="ui.placeholder"
      :class="{ 'v__input-number-hidden-step': ui.hideStep }"
      @change="change($event)"
    />
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { NumberMeta } from "../meta/number.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-number",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new NumberMeta(this.state, this.id),
      min: -Infinity,
      max: Infinity,
      step: 1,
      formatter: (value) => value,
      parser: (value) => value,
    };
  },
  created() {
    const {
      minimum,
      exclusiveMinimum,
      maximum,
      exclusiveMaximum,
      multipleOf,
      type,
    } = this.schema;
    this.step = multipleOf || 1;
    if (typeof minimum !== "undefined") {
      this.min = exclusiveMinimum ? minimum + this.step : minimum;
    }
    if (typeof maximum !== "undefined") {
      this.max = exclusiveMaximum ? maximum - this.step : maximum;
    }
    if (type === "integer") {
      this.min = Math.trunc(this.min);
      this.max = Math.trunc(this.max);
      this.step = Math.trunc(this.step);
    }

    const ui = this.ui;
    if (ui.prefix != null) {
      ui.formatter = (value) => (value == null ? "" : `${ui.prefix} ${value}`);
      ui.parser = (value) => value.replace(`${ui.prefix} `, "");
    }

    if (ui.unit != null) {
      ui.formatter = (value) => (value == null ? "" : `${value} ${ui.unit}`);
      ui.parser = (value) => value.replace(` ${ui.unit}`, "");
    }

    if (ui.formatter) this.formatter = ui.formatter;
    if (ui.parser) this.parser = ui.parser;
  },
  mounted() {
    this.applyInitValue();
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
  methods: {
    change(val) {
      this.value = this.schema.type === "integer" ? Math.floor(val) : val;

      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
