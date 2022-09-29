<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
      <a-button type="primary" @click="setFormat"> 设置规格 </a-button>
      <a-button type="primary" @click="printData"> 提交 </a-button>
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
          single: {
            title: "基本",
            type: "string",
            ui: {
              showRequired: true,
              component: "radio",
              options: ["同意"],
            },
          },
          multiple: {
            title: "规格",
            type: "string",
            default: "中",
            ui: {
              component: "radio",
              options: ["大", "中", "小"],
            },
          },
          buttonStyle: {
            title: "按钮样式",
            type: "string",
            ui: {
              component: "radio",
              options: [
                { label: "北京", value: "北京" },
                { label: "上海", value: "上海" },
                { label: "深圳", value: "深圳", disabled: true },
                { label: "广州", value: "广州" },
              ],
              radioType: "button",
              buttonStyle: "outline",
            },
          },
          buttonStyleSolid: {
            title: "按钮样式",
            type: "string",
            default: "上海",
            ui: {
              component: "radio",
              options: [
                { label: "北京", value: "北京" },
                { label: "上海", value: "上海" },
                { label: "深圳", value: "深圳", disabled: true },
                { label: "广州", value: "广州" },
              ],
              radioType: "button",
              buttonStyle: "solid",
            },
          },
          vertical: {
            title: "竖向排列",
            type: "string",
            ui: {
              component: "radio",
              options: ["大", "中", "小"],
              direction: "vertical",
            },
          },
        },
        required: ["name", "single"],
      },
      data: { name: "kevin zhang" },
    };
  },
  components: {
    VFormly,
  },
  methods: {
    printData() {
      let valid = this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      }
    },
    setFormat() {
      const context = this.$refs.form.getContext("multiple");
      if (context) {
        context.ui.options = ["上", "右", "下", "左"];
        context.value = "下";
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
