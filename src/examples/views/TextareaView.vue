<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" layout="horizontal">
    </v-formly>
    <div class="btns">
      <a-button type="primary" @click="printData"> 打印FormData </a-button>
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
            default: "default default default",
            maxLength: 10,
            ui: {
              component: "textarea",
              placeholder: "{ minRows: 2, maxRows: 6 }",
              allowClear: true,
              autosize: { minRows: 2, maxRows: 6 },
              change: (val) => console.log("change", val),
              focus: (e) => console.log("focus", e),
              blur: (e) => console.log("blur", e),
              pressEnter: (e) => console.log("pressEnter", e),
            },
          },
          remark1: {
            type: "string",
            title: "描述",
            ui: {
              component: "textarea",
            },
          },
          remark2: {
            type: "string",
            title: "描述",
            ui: {
              component: "textarea",
              autosize: false,
            },
          },
          remark3: {
            type: "string",
            title: "描述",
            readOnly: true,
          },
        },
      },
    };
  },
  methods: {
    printData() {
      console.log(this.data);
    },
  },
};
</script>
<style lang="less" scoped></style>
