<template>
  <v-wrapper :id="id" :meta="meta">
    <a-checkbox-group
      class="v__checkbox"
      v-model="context.optionsValue"
      v-bind="ui"
      :disabled="meta.readOnly"
      :options="meta.enum"
      @change="change"
    />
    <a-input
      v-model="context.othersValue"
      v-show="showOthers"
      @change="change"
    />
  </v-wrapper>
</template>
<script>
import { ChkInputMeta } from "./chk-input.meta.js";
import { componentMixin } from "@/formly.js";
export default {
  name: "v-chk-input",
  mixins: [componentMixin],
  data: function () {
    return {
      context: new ChkInputMeta(this.state, this.id, this.meta),
    };
  },
  computed: {
    showOthers() {
      if (!this.context.value) return false;

      return (this.context.value.options || []).indexOf("Others") > -1;
    },
  },
  methods: {
    change() {
      if (this.ui.change) {
        this.ui.change(this.context.value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
