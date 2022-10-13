<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
      <template v-slot:custom_suffix>
        <a-icon slot="suffixIcon" type="smile" />
      </template>
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      meta: {
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
              type: "month",
              valueFormat: "MMMM",
              slotNameOfSuffixIcon: "custom_suffix",
            },
          },
          week: {
            type: "string",
            title: "周",
            ui: {
              component: "date",
              type: "week",
            },
          },
          range: {
            type: "string",
            title: "日期范围",
            ui: {
              component: "date",
              type: "range",
              slotNameOfSuffixIcon: "custom_suffix",
            },
          },
          date: {
            type: "string",
            title: "日期",
            ui: {
              component: "date",
              type: "date",
              valueFormat: "X",
            },
          },
        },
        required: ["name"],
      },
      data: { name: "kevin zhang" },
    };
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
