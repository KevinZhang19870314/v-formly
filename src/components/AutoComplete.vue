<template>
  <v-wrapper :id="id" :meta="meta">
    <a-auto-complete
      :defaultValue="meta.default"
      :disabled="meta.readOnly"
      :placeholder="ui.placeholder"
      :filterOption="ui.filterOption"
      :backfill="ui.backfill"
      v-model="value"
      :data-source="ui.slotNameOfDataSource ? null : ui.dataSource"
      @search="handleSearch"
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
    handleSearch(value) {
      if (this.meta.ui && this.meta.ui.handleSearch) {
        this.meta.ui.handleSearch(value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
