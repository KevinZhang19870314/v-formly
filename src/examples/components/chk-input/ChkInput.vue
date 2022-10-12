<template>
  <v-wrapper :id="id" :meta="meta">
    <a-checkbox-group
      class="v__checkbox"
      v-model="chkVal"
      v-bind="ui"
      :disabled="meta.readOnly"
      :options="meta.enum"
      @change="change"
    />
    <a-input v-model="othersValue" v-show="ui.showOthers" @change="change" />
  </v-wrapper>
</template>
<script>
import { ChkInputMeta } from "./chk-input.meta.js";
import { componentMixin } from "@/formly.js";
export default {
  name: "v-chk-input",
  mixins: [componentMixin],
  data() {
    return {
      context: new ChkInputMeta(this.state, this.id, this.meta),
    };
  },
  computed: {
    value: {
      get() {
        return this.context.value;
      },
      set(val) {
        this.context.value = val || undefined;
      },
    },
    chkVal: {
      get() {
        return this.context.chkVal;
      },
      set(val) {
        this.context.chkVal = val;
      },
    },
    othersValue: {
      get() {
        return this.context.othersValue;
      },
      set(val) {
        this.context.othersValue = val;
      },
    },
  },
  methods: {
    change() {
      console.log(this.value);
      this.ui.showOthers = (this.value || []).indexOf("Others") > -1;

      if (this.ui.change) {
        this.ui.change(this.value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
