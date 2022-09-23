<template>
  <v-wrapper :id="id" :meta="meta">
    <a-switch
      class="v__boolean"
      v-model="value"
      :disabled="ui.disabled"
      :size="ui.size"
      :checkedChildren="ui.checkedChildren"
      :unCheckedChildren="ui.unCheckedChildren"
      @change="change"
    >
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
      context: new BooleanMeta(this.state, this.id),
    };
  },
  computed: {
    value: {
      get: function () {
        return this.context.value;
      },
      set: function (val) {
        this.context.value = val || false;
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
  },
};
</script>
<style lang="less" scoped></style>
