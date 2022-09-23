<template>
  <v-wrapper :id="id" :meta="meta">
    <a-auto-complete
      :defaultValue="schema.default"
      :disabled="ui.disabled"
      :placeholder="ui.placeholder"
      :filterOption="ui.filterOption"
      :backfill="ui.backfill"
      v-model="value"
      :data-source="ui.slotName ? null : ui.dataSource"
      @search="handleSearch"
    >
      <template v-if="ui.slotName" v-slot:dataSource>
        <slot :name="ui.slotName"></slot>
      </template>
    </a-auto-complete>
  </v-wrapper>
</template>
<script>
import VWrapper from "./Wrapper.vue";
import { AutoCompleteMeta } from "../meta/autocomplete.meta.js";
export default {
  name: "v-autocomplete",
  components: { VWrapper },
  inject: ["state"],
  props: {
    id: String,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      context: new AutoCompleteMeta(this.state, this.id),
    };
  },
  computed: {
    ui: function () {
      return this.meta.ui || {};
    },
    schema: function () {
      return this.meta || {};
    },
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
    handleSearch(value) {
      if (this.meta.ui && this.meta.ui.handleSearch) {
        this.meta.ui.handleSearch(value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
