<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
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
              validator: (val) =>
                !val ? [{ keyword: "required", message: "Required name" }] : [],
            },
          },
          desc: {
            title: "描述",
            type: "string",
            ui: {
              showRequired: true,
              validator: (val) =>
                !val ? [{ keyword: "required", message: "Required desc" }] : [],
            },
          },
          asyncError: {
            title: "异步错误（2秒）",
            type: "string",
            ui: {
              showRequired: true,
              validatorAsync: (val) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    return resolve(
                      !val
                        ? [
                            {
                              keyword: "required",
                              message: "Required asyncError",
                            },
                          ]
                        : []
                    );
                  }, 2000);
                });
              },
            },
          },
        },
        required: ["name", "desc", "asyncError"],
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
  },
};
</script>
<style lang="less" scoped></style>
