<template>
  <v-wrapper :id="id" :meta="meta">
    <a-switch
      class="v__boolean"
      v-bind="bindings"
      v-model="value"
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
import { Switch } from "ant-design-vue";
import { getBindings } from "@/utils/register.factory.js";
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
    bindings() {
      return getBindings(Object.keys(Switch.props), this.ui);
    },
  },
  methods: {
    change(checked, event) {
      if (this.ui.change) {
        this.ui.change(checked, event);
      }
    },
  },
};
</script>
