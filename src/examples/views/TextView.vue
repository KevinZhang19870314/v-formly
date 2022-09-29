<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" layout="horizontal">
      <template v-slot:testSlot>
        <h1 style="color: green; border: 1px dashed green">
          I am Text testSlot
        </h1>
      </template>
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
          name1: {
            title: "姓名",
            type: "string",
            ui: {
              showRequired: true,
            },
          },
          id1: {
            title: "default title",
            description: "default description",
            type: "null",
            ui: {
              component: "text",
              text: "default text", // string | () => string
            },
          },
          id2: {
            title: "default title",
            type: "null",
            ui: {
              component: "text",
              text: () => "default text", // () => string
            },
          },
          id3: {
            description: "default description",
            type: "null",
            ui: {
              component: "text",
              html: `<h1 style="color: red">I am Text</h1>`, // v-html
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
              text: "default text",
              offsetControl: 5,
            },
          },
          id6: {
            type: "null",
            ui: {
              component: "text",
              text: "default text",
            },
          },
          name2: {
            title: "姓名",
            type: "string",
          },
        },
        required: ["name1"]
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
