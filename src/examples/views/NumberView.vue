<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      meta: {
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
  methods: {
    clear() {
      this.formData = null;
      // Below line do the same thing
      // this.$refs.form.reset(null);
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.formData);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
