<template>
  <v-wrapper :id="id" :meta="meta">
    <a-auto-complete
      :defaultValue="schema.default"
      :disabled="schema.readOnly"
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
import { componentMixin } from "../mixin/component.mixin.js";
export default {
  name: "v-autocomplete",
  components: { VWrapper },
  mixins: [componentMixin],
  data() {
    return {
      context: new AutoCompleteMeta(this.state, this.id),
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
    handleSearch(value) {
      if (this.meta.ui && this.meta.ui.handleSearch) {
        this.meta.ui.handleSearch(value);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
