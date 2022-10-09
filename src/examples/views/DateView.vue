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
            },
          },
          month: {
            type: "string",
            title: "月份",
            default: "May",
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
