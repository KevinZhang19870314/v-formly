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
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
              errors: {
                required: "请输入姓名",
              },
            },
          },
          favLanguage: {
            title: "喜欢的前端框架",
            type: "string",
            enum: ["VueJs", "Angular", "React", "Others"],
            // default: {
            //   options: ["VueJs", "Angular", "Others"],
            //   others: "NestJs",
            // },
            ui: {
              component: "chkinput",
              showRequired: true,
            },
          },
        },
        required: ["name", "favLanguage"],
      },
      data: {
        name: "Jack",
        favLanguage: {
          options: ["VueJs", "Angular", "Others"],
          others: "NestJs",
        },
      },
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
