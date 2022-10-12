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
  name: "PasswordView",
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
          password: {
            title: "密码",
            type: "string",
            default: "123456",
            ui: {
              component: "password",
              showRequired: true,
              errors: {
                required: "请输入密码",
              },
            },
          },
        },
        required: ["name", "password"],
      },
      data: {},
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
