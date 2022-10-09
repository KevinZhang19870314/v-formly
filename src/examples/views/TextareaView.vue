<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" layout="horizontal">
    </v-formly>
    <div class="btns">
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
          remark: {
            type: "string",
            title: "描述",
            ui: {
              component: "textarea",
              showRequired: true,
              change: (val) => console.log("change", val),
              focus: (e) => console.log("focus", e),
              blur: (e) => console.log("blur", e),
              pressEnter: (e) => console.log("pressEnter", e),
            },
          },
          remark6: {
            type: "string",
            title: "指定 autosize",
            ui: {
              component: "textarea",
              placeholder: "{ minRows: 2, maxRows: 6 }",
              autosize: { minRows: 2, maxRows: 6 },
            },
          },
          remark1: {
            type: "string",
            title: "自适应内容高度",
            default:
              "content content content content content content content content content content content content content content content content content content content content content content content content",
            ui: {
              component: "textarea",
            },
          },
          remark2: {
            type: "string",
            title: "不自适应内容高度",
            default:
              "content content content content content content content content content content content content content content content content content content content content content content content content",
            ui: {
              component: "textarea",
              autosize: false,
            },
          },
          remark3: {
            type: "string",
            title: "禁用状态",
            default: "content content content",
            ui: {
              component: "textarea",
            },
            readOnly: true,
          },
          remark4: {
            type: "string",
            title: "显示清除按钮",
            default: "content content content",
            ui: {
              component: "textarea",
              allowClear: true,
            },
          },
          remark5: {
            type: "string",
            title: "最大长度",
            maxLength: 10,
            ui: {
              component: "textarea",
              placeholder: "maxLength = 10",
            },
          },
        },
        required: ["remark"],
      },
    };
  },
  methods: {
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
