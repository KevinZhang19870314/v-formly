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
        },
        required: ["name", "desc"],
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
