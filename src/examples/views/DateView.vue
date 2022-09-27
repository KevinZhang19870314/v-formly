<template>
  <div class="wrapper">
    <h1>v-date</h1>
    <v-formly ref="form" v-model="data" :schema="schema" :layout="'horizontal'">
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
          month: {
            type: "string",
            title: "月份",
            ui: {
              component: "date",
              mode: "month",
              valueFormat: "MMMM",
            },
          },
          week: {
            type: "string",
            title: "周",
            ui: {
              component: "date",
              mode: "week",
            },
          },
          range: {
            type: "string",
            title: "日期范围",
            ui: {
              component: "date",
              mode: "range",
            },
          },
          date: {
            type: "string",
            title: "日期",
            ui: {
              component: "date",
              mode: "date",
              valueFormat: "X",
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
