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
        :depth="item.depth"
        :meta="item.meta"
      ></v-formly-item>
    </a-col>
  </a-row>
  <!-- <div>
    <v-formly-item
      v-for="(item, index) in childMetaPairs"
      :key="index"
      :id="item.key"
      :depth="item.depth"
      :meta="item.meta"
    ></v-formly-item>
  </div> -->
</template>
<script>
import { ObjectMeta } from "../meta/object.meta.js";
import VFormlyItem from "@/FormlyItem.vue";
import { getUI, getContext } from "@/utils/global.js";
export default {
  name: "v-object",
  components: { VFormlyItem },
  props: {
    id: String,
    depth: Number,
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
      return getUI().grid || this.grid || {};
    },
  },
  created() {
    const metaInstance = new ObjectMeta(getContext(), this.id, this.meta, this.depth);
    this.childMetaPairs = metaInstance.childMetaPairs;
  },
  mounted() {
    // console.log("this.meta", this.meta);
  },
};
</script>
<style lang="less"></style>
