<template>
  <v-wrapper :id="id" :meta="meta">
    <a-switch
      class="v__boolean"
      v-model="value"
      v-bind="ui"
      :disabled="meta.readOnly"
      @change="change"
    >
      <template v-if="ui.slotNameOfCheckedChildren" v-slot:checkedChildren>
        <slot :name="ui.slotNameOfCheckedChildren"></slot>
      </template>
      <template v-if="ui.slotNameOfUnCheckedChildren" v-slot:unCheckedChildren>
        <slot :name="ui.slotNameOfUnCheckedChildren"></slot>
      </template>
    </a-switch>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { BooleanMeta } from "../meta/boolean.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-boolean",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new BooleanMeta(this.state, this.id, this.meta),
    };
  },
  computed: {
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
        this.context.value = val || false;
      },
    },
  },
  methods: {
    change(checked, event) {
      if (this.ui.change) {
        this.ui.change(this.value, event);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
