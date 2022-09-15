<template>
  <div>
    <v-formly-item
      v-for="(item, index) in items"
      :key="index"
      :type="'object'"
      :meta="objectMeta"
    ></v-formly-item>
  </div>
</template>
<script>
import { ObjectMeta } from "../meta/object.meta";
import VFormlyItem from "@/FormlyItem.vue";
export default {
  name: "v-object",
  components: { VFormlyItem },
  props: {
    meta: {
      type: Object,
      default: () => {},
    },
  },
  data: () => {
    return {
      meta: {},
      properties: [],
      propertiesKey: [],
    };
  },
  created() {
    console.log("created", this.meta);
    const metaInstance = new ObjectMeta(this.meta);
    this.properties = metaInstance.properties;
    this.propertiesKey = metaInstance.propertiesKey;
  },
  mounted() {
    console.log("this.meta", this.meta);
  },
};
</script>
<style lang="less" scoped></style>
