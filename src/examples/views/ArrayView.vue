<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
      <a-button type="primary" @click="setName0"> 设置名称0 </a-button>
      <a-button type="primary" @click="printData"> 提交 </a-button>
      <a-button type="primary" @click="set(5)"> add more</a-button>
      <a-button type="primary" @click="add"> add one</a-button>
      <a-button type="primary" @click="clear"> clear </a-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArrayView",
  data() {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            ui: {
              showRequired: true,
            },
          },
          product: {
            type: "array",
            title: "产品清单",
            // description: '至少添加一个，至多添加三个',
            minItems: 1,
            maxItems: 3,
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  title: "名称",
                  ui: {
                    showRequired: true,
                  },
                  default: "1",
                },
                desc: { type: "string", title: "简介" },
                product: {
                  type: "array",
                  title: "产品清单",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string", title: "名称", default: "1-1" },
                      desc: { type: "string", title: "简介" },
                    },
                  },
                  ui: {
                    grid: { arraySpan: 24 },
                  },
                },
              },
              required: ["name"],
            },
            ui: {
              showRequired: true,
              grid: { arraySpan: 24 },
              addTitle: "添加",
              optional: "(选填)",
              optionalHelp: {
                icon: "question-circle",
                text: "选填帮助",
              },
            },
            default: [
              {
                name: "2",
              },
            ],
          },
        },
        required: ["name"],
      },
      data: {
        product: [
          {
            name: "3",
          },
        ],
      },
    };
  },
  methods: {
    async printData() {
      const valid = await this.$refs.form.validate();
      console.log(valid, this.data);
    },
    setName0() {
      const context = this.$refs.form.getContext("/product/0/name");
      if (context) {
        context.value = "kevin zhang";
      }
    },
    clear() {
      const ctx = this.$refs.form.getContext("/product");
      console.log(ctx.value);
      ctx.value = [];
    },
    set(number) {
      const ctx = this.$refs.form.getContext("/product");
      console.log(ctx.value);
      const arr = [];
      for (let i = 0; i < number; i++) {
        arr.push({
          name: `${i}`,
          desc: `${i}`,
          product: [
            { name: `${i}-1`, desc: `${i}-1` },
            { name: `${i}-2`, desc: `${i}-2` },
            { name: `${i}-3`, desc: `${i}-3` },
            { name: `${i}-4`, desc: `${i}-4` },
          ],
        });
      }
      ctx.value = arr;
    },
    add() {
      const ctx = this.$refs.form.getContext("/product");
      ctx.add();
    },
  },
};
</script>
<style lang="less" scoped></style>
