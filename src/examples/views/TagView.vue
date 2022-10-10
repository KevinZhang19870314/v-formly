<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" layout="horizontal">
    </v-formly>
    <div class="btns">
      <a-button type="primary" @click="changeEnum"> change enum </a-button>
      <a-button type="primary" @click="printData"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";
export default {
  components: {
    VFormly,
  },
  data() {
    return {
      data: {},
      schema: {
        properties: {
          like1: {
            type: "number",
            title: "兴趣",
            enum: [
              { value: 1, label: "电影" },
              { value: 2, label: "书" },
              { value: 3, label: "旅行" },
            ],
            ui: {
              component: "tag",
              showRequired: true,
              errors: {
                required: "请至少选择一项",
              },
              checkedChange: (checked) => console.log("checkedChange", checked),
              change: (value) => console.log("change", value),
            },
          },
          like2: {
            type: "number",
            title: "no label",
            enum: ["电影", "书", "旅行"],
            ui: {
              component: "tag",
            },
          },
          like3: {
            type: "number",
            title: "禁用状态",
            readOnly: true,
            enum: ["电影", "书", "旅行"],
            ui: {
              component: "tag",
            },
            default: ["电影", "书"],
          },
        },
        required: ["like1"],
      },
    };
  },
  methods: {
    changeEnum() {
      const ctx = this.$refs.form.getContext("/like1");
      if (ctx) {
        ctx.meta.enum = [
          { value: 1, label: "new 电影" },
          { value: 2, label: "new 书" },
          { value: 3, label: "new 旅行" },
        ];
      }
    },
    async printData() {
      const valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
