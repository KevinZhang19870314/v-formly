<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "VisibleIfView",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          string1: {
            title: "字段二是否可见",
            type: "string",
            ui: {
              showRequired: true,
              placeholder: "当值为v-formly时字段二可见",
              errors: {
                required: "请输入",
              },
              change: (val) => console.log(val),
            },
          },
          string2: {
            title: "字段二",
            type: "string",
            ui: {
              showRequired: true,
              show: false,
              visibleIf: {
                "/string1": (context, id, val) => {
                  return val === "v-formly";
                },
              },
            },
          },
        },
        required: ["string1", "string2"],
      },
      formData: {},
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
