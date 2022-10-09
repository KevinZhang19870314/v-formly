<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 清除 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";
export default {
  name: "HomeView",
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
              errors: {
                "required": "请输入姓名"
              }
            },
          },
          desc: {
            title: "描述",
            type: "string",
            default: "Base on technical, but not limited on it!",
            ui: {
              change: (val) => {
                console.log("val = ", val);
              },
            },
          },
          enable: {
            title: "启用",
            type: "boolean",
          },
        },
        required: ["name"],
      },
      data: { enable: true },
    };
  },
  components: {
    VFormly,
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
