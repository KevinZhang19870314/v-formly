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
          price: {
            type: "number",
            title: "价格",
            minimum: 10,
            maximum: 100,
            multipleOf: 2,
          },
          grade: {
            type: "integer",
            title: "年级",
            default: 3,
          },
          salary: {
            type: "number",
            title: "薪资",
            default: 88888.88,
            ui: { prefix: "$" },
          },
          increase: {
            type: "number",
            title: "薪资涨幅",
            default: 30,
            ui: { unit: "%" },
          },
          hideStep: {
            type: "number",
            title: "隐藏step",
            default: 10000,
            ui: { hideStep: true },
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
