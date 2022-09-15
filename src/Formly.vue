<template>
  <a-form-model :layout="layout">
    <v-formly-item :type="'object'" :meta="objectMeta"></v-formly-item>
  </a-form-model>
</template>
<script>
import VFormlyItem from "@/FormlyItem.vue";
export default {
  name: "v-formly",
  components: { VFormlyItem },
  props: {
    layout: {
      type: String,
      default: "horizontal",
    },
    schema: {},
  },
  data: () => {
    return {
      objectMeta: {},
    };
  },
  created() {
    if (!this.schema || typeof this.schema.properties === "undefined")
      throw new Error(`Invalid Schema`);

    this.schema.type = 'object';
    this.objectMeta = this.schema;
  },
};
</script>
<style lang="less" scoped></style>
