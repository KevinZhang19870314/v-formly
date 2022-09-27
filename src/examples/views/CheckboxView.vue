<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
      <a-button type="primary" @click="printData"> 打印FormData </a-button>
    </div>
  </div>
</template>
<script>
import VFormly from "@/Formly.vue";
export default {
  data: function () {
    return {
      schema: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
            },
          },
          fruits: {
            title: "水果",
            type: "string",
            enum: ["Apple", "Pera", "Orange"],
            default: ["Orange"],
            ui: {
              component: "checkbox",
            },
          },
          fruits1: {
            title: "水果1",
            type: "string",
            enum: [
              { label: "Apple", value: "Apple" },
              { label: "Pera", value: "Pera" },
              { label: "Orange", value: "Orange" },
            ],
            default: ["Apple"],
            ui: {
              component: "checkbox",
            },
          },
          colors: {
            title: "颜色",
            type: "string",
            enum: [
              "Red",
              "Orange",
              "Yellow",
              "Green",
              "Blue",
              "Purple",
              "White",
              "Black",
            ],
            default: ["Yellow", "White"],
            ui: {
              component: "checkbox",
              span: 4,
            },
          },
        },
        required: ["name"],
      },
      data: { name: "kevin zhang" },
    };
  },
  components: {
    VFormly,
  },
  methods: {
    printData() {
      console.log(this.data);
    },
  },
};
</script>
<style lang="less" scoped></style>
