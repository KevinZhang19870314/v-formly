<template>
  <div class="wrapper">
    <h1>v-autocomplete</h1>
    <v-formly ref="form" v-model="data" :schema="schema" :layout="'horizontal'">
      <template v-slot:datasource>
        <a-select-option v-for="email in result" :key="email">
          {{ email }}
        </a-select-option>
      </template>
      <template v-slot:datasource1>
        <a-select-option v-for="email in result1" :key="email">
          {{ email }}
        </a-select-option>
      </template>
      <template v-slot:datasource2>
        <a-select-option v-for="email in result2" :key="email">
          {{ email }}
        </a-select-option>
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
            },
          },
          fruits: {
            title: "水果",
            type: "string",
            enum: ["Apple", "Pera", "Orange"],
            default: ["Orange"],
            ui: {
              component: "checkbox",
            },
          },
          fruits1: {
            title: "水果1",
            type: "string",
            enum: [
              { label: "Apple", value: "Apple" },
              { label: "Pera", value: "Pera" },
              { label: "Orange", value: "Orange" },
            ],
            default: ["Apple"],
            ui: {
              component: "checkbox",
            },
          },
          colors: {
            title: "颜色",
            type: "string",
            enum: [
              "Red",
              "Orange",
              "Yellow",
              "Green",
              "Blue",
              "Purple",
              "White",
              "Black",
            ],
            default: ["Yellow", "White"],
            ui: {
              component: "checkbox",
              span: 4,
            },
          },
        },
        required: ["name"],
      },
      data: { name: "kevin zhang" },
    };
  },
  components: {
    VFormly,
  },
  methods: {
    printData() {
      console.log(this.data);
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  padding: 0 500px;
  .btns {
    display: flex;
    justify-content: flex-end;

    .ant-btn {
      margin-right: 8px;
    }
  }
}
</style>
