<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" layout="horizontal">
      <template v-slot:testSlot>
        <h1 style="color: green; border: 1px dashed green">slot 类型的 text</h1>
      </template>
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
          name: {
            title: "姓名",
            type: "string",
            ui: {
              showRequired: true,
            },
          },
          id1: {
            title: "title",
            description: "description",
            type: "null",
            ui: {
              component: "text",
              text: "包含 title 和 description 的文本", // string | () => string
            },
          },
          id2: {
            type: "null",
            ui: {
              component: "text",
              text: () => "() => string 类型的 text", // () => string
              offsetControl: 5,
            },
          },
          id3: {
            type: "null",
            ui: {
              component: "text",
              html: `<h1 style="color: red">HTML 类型的 text</h1>`, // v-html
              text: "default text",
              offsetControl: 5,
            },
          },
          id4: {
            type: "null",
            ui: {
              component: "text",
              slotNameOfDefault: "testSlot", // slot
              html: `<h1 style="color: red">I am Text</h1>`,
              text: "default text",
              offsetControl: 5,
            },
          },
          id5: {
            type: "null",
            ui: {
              component: "text",
              text: "没有 title 和 offsetControl",
            },
          },
          id6: {
            type: "null",
            ui: {
              component: "text",
              text: "没有 title, offsetControl = 5",
              offsetControl: 5,
            },
          },
          id7: {
            type: "null",
            ui: {
              component: "text",
              text: "没有 title, offsetControl = 4",
              offsetControl: 4,
            },
          },
          id8: {
            type: "null",
            ui: {
              component: "text",
              text: "多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本",
              spanControl: 24,
            },
          },
          address: {
            title: "地址",
            type: "string",
          },
        },
        required: ["name"],
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
