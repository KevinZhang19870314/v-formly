<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChkInputView",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "用户名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
              errors: {
                required: "请输入用户名",
              },
            },
          },
          favLanguage: {
            title: "密码",
            type: "string",
            enum: ["VueJs", "Angular", "React", "Others"],
            default: ["VueJs", "NestJs"],
            ui: {
              component: "chkinput",
              showOthers: false,
              showRequired: true,
            },
          },
        },
        required: ["name", "favLanguage"],
      },
      data: { name: "Jack123", favLanguage: ["Angular"] },
    };
  },
  methods: {
    clear() {
      this.data = null;
      // this.$refs.form.reset(null);
    },
    async submit() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
