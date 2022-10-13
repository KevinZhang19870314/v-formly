<template>
  <v-wrapper :id="id" :meta="meta">
    <a-radio-group
      v-if="ui.radioType === 'button'"
      :class="{ 'v__radio-vertical': ui.direction === 'vertical' }"
      v-model="value"
      :disabled="meta.readOnly"
      :name="ui.name"
      :size="ui.size"
      :buttonStyle="ui.buttonStyle"
      @change="change"
    >
      <a-radio-button
        :value="option.value"
        :disabled="option.disabled"
        v-for="(option, index) in ui.options"
        :key="index"
      >
        {{ option.label }}
      </a-radio-button>
    </a-radio-group>
    <a-radio-group
      v-else
      :class="{ 'v__radio-vertical': ui.direction === 'vertical' }"
      v-model="value"
      :disabled="meta.readOnly"
      :name="ui.name"
      :options="ui.options"
      :size="ui.size"
      :buttonStyle="ui.buttonStyle"
      @change="change"
    />
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-radio",
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
  },
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
