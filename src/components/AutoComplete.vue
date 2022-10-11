<template>
  <v-wrapper :id="id" :meta="meta">
    <a-auto-complete
      v-bind="ui"
      :defaultValue="meta.default"
      :disabled="meta.readOnly"
      v-model="value"
      @change="change"
      @search="search"
      @select="select"
    >
      <template v-if="ui.slotNameOfDataSource" v-slot:dataSource>
        <slot :name="ui.slotNameOfDataSource"></slot>
      </template>
      <template v-if="ui.slotNameOfDefault" v-slot:default>
        <slot :name="ui.slotNameOfDefault"></slot>
      </template>
    </a-auto-complete>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { StringMeta } from "../meta/string.meta.js";
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-autocomplete",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new StringMeta(this.state, this.id, this.meta),
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
  },
  methods: {
    change(value) {
      if (this.meta.ui && this.meta.ui.change) {
        this.meta.ui.change(value);
      }
    },
    search(value) {
      if (this.meta.ui && this.meta.ui.search) {
        this.meta.ui.search(value);
      }
    },
    select(value, option) {
      if (this.meta.ui && this.meta.ui.search) {
        this.meta.ui.search(value, option);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
