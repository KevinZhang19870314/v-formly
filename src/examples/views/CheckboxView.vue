<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
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
