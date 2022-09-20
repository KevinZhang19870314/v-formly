<template>
  <a-row :gutter="grid.gutter">
    <a-col
      v-for="(item, index) in childMetaPairs"
      :key="index"
      :span="grid.span"
      :offset="grid.offset"
      :xs="grid.xs"
      :sm="grid.sm"
      :md="grid.md"
      :lg="grid.lg"
      :xl="grid.xl"
      :xxl="grid.xxl"
    >
      <v-formly-item
        :id="item.key"
        :meta="item.meta"
        :show="visibleIf(item.key, item.meta)"
      ></v-formly-item>
    </a-col>
  </a-row>
</template>
<script>
import { ObjectMeta } from "../meta/object.meta.js";
import VFormlyItem from "@/FormlyItem.vue";
export default {
  name: "v-object",
  components: { VFormlyItem },
  inject: ["state"],
  props: {
    id: String,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  data: () => {
    return {
      childMetaPairs: [],
    };
  },
  computed: {
    grid: function () {
      return this.state.ui.grid || this.grid || {};
    },
  },
  created() {
    const metaInstance = new ObjectMeta(this.state, this.id, this.meta);
    this.childMetaPairs = metaInstance.childMetaPairs;
  },
  methods: {
    visibleIf(id, meta) {
      let visible = true;
      if (!meta.ui) {
        visible = true;
      } else if (typeof meta.ui.visibleIf === "boolean") {
        visible = meta.ui.visibleIf;
      } else if (typeof meta.ui.visibleIf === "function") {
        visible = meta.ui.visibleIf(null, id, meta.default);
      } else {
        visible = true;
      }

      console.log("visible = ", visible);
      return visible;
    },
  },
  mounted() {
    // console.log("this.meta", this.meta);
  },
};
</script>
<style lang="less" scoped></style>
