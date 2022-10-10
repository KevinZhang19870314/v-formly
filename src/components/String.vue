<template>
  <v-wrapper :id="id" :meta="meta">
    <a-input
      :addonBefore="ui.slotNameOfAddonBefore ? undefined : ui.addonBefore"
      :addonAfter="ui.slotNameOfAddonAfter ? undefined : ui.addonAfter"
      :defaultValue="schema.defaultValue"
      :disabled="schema.readOnly"
      :id="ui.id"
      :maxLength="schema.maxLength"
      :prefix="ui.slotNameOfPrefix ? undefined : ui.prefix"
      :size="ui.size"
      :suffix="ui.slotNameOfSuffix ? undefined : ui.suffix"
      :allowClear="ui.allowClear"
      :placeholder="ui.placeholder"
      :type="ui.type"
      v-model="value"
      @change="change"
    >
      <!-- prefix & suffix -->
      <template v-if="ui.slotNameOfPrefix" v-slot:prefix>
        <slot :name="ui.slotNameOfPrefix"></slot>
      </template>
      <template v-if="ui.slotNameOfSuffix" v-slot:suffix>
        <slot :name="ui.slotNameOfSuffix"></slot>
      </template>

      <!-- addonBefore & addonAfter -->
      <template v-if="ui.slotNameOfAddonBefore" v-slot:addonBefore>
        <slot :name="ui.slotNameOfAddonBefore"></slot>
      </template>
      <template v-if="ui.slotNameOfAddonAfter" v-slot:addonAfter>
        <slot :name="ui.slotNameOfAddonAfter"></slot>
      </template>
    </a-input>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-string",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
    };
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
    change() {
      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
