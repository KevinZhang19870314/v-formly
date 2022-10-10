<template>
  <a-row :gutter="gutter">
    <a-col
      v-for="(item, index) in childMetaPairs"
      :key="index"
      :span="grid(item).span"
      :offset="grid(item).offset"
      :xs="grid(item).xs"
      :sm="grid(item).sm"
      :md="grid(item).md"
      :lg="grid(item).lg"
      :xl="grid(item).xl"
      :xxl="grid(item).xxl"
      :style="{ display: layout === 'inline' ? 'inline-block' : 'block' }"
    >
      <v-formly-item
        :id="item.key"
        :meta="item.meta"
        :show="visible(item.meta)"
      >
        <template v-for="slotName in slotsName" v-slot:[slotName]="{ context }">
          <slot :name="slotName" v-bind:context="context">
            {{ "object slot" }}
          </slot>
        </template>
      </v-formly-item>
    </a-col>
  </a-row>
  <!-- <div v-else style="display: inline-block">
    <v-formly-item
      v-for="(item, index) in childMetaPairs"
      :key="index"
      :id="item.key"
      :meta="item.meta"
      :show="visible(item.meta)"
    >
      <template v-for="slotName in slotsName" v-slot:[slotName]="{ context }">
        <slot :name="slotName" v-bind:context="context">
          {{ "object slot" }}
        </slot>
      </template>
    </v-formly-item>
  </div> -->
</template>
<script>
import { ObjectMeta } from "../meta/object.meta.js";
import VFormlyItem from "@/FormlyItem.vue";
import { slotsMixin } from "../mixin/slots.mixin.js";
export default {
  name: "v-object",
  components: { VFormlyItem },
  mixins: [slotsMixin],
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
    ui: function () {
      return this.meta.ui || {};
    },
    schema: function () {
      return this.meta || {};
    },
    gutter: function () {
      return Object.assign({}, this.state.ui.grid, this.ui.grid).gutter;
    },
    layout: function () {
      return this.state.layout;
    },
  },
  methods: {
    visible(meta) {
      return meta.ui && !meta.ui.hidden;
    },
    grid(item) {
      if (this.layout === "inline") return {};
      const grid = (item.meta.ui && item.meta.ui.grid) || {};
      return Object.assign({}, this.state.ui.grid, this.ui.grid, grid);
    },
  },
  created() {
    const metaInstance = new ObjectMeta(this.state, this.id, this.meta);
    this.childMetaPairs = metaInstance.childMetaPairs;
  },
};
</script>
<style lang="less" scoped></style>
