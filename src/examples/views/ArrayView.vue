<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
      <a-button type="primary" @click="setName0"> 设置名称0 </a-button>
      <a-button type="primary" @click="printData"> 提交 </a-button>
      <a-button type="primary" @click="set(100)"> add more</a-button>
      <a-button type="primary" @click="add"> add one</a-button>
      <a-button type="primary" @click="clear"> clear </a-button>
    </div>
  </div>
</template>
<script>
import VFormly from "@/Formly.vue";
export default {
  name: "ArrayView",
  components: {
    VFormly,
  },
  data() {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
          },
          product: {
            type: "array",
            title: "产品清单",
            // maxItems: 3,
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  title: "名称",
                  ui: {
                    showRequired: true,
                  },
                },
                desc: {
                  type: "string",
                  title: "简介",
                  ui: {
                    showRequired: true,
                  },
                },
                product: {
                  type: "array",
                  title: "产品清单",
                  items: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        title: "名称",
                        ui: {
                          showRequired: true,
                        },
                      },
                      desc: {
                        type: "string",
                        title: "简介",
                        ui: {
                          showRequired: true,
                        },
                      },
                    },
                    required: ["name", "desc"],
                  },
                  ui: {
                    grid: { arraySpan: 12 },
                    addTitle: "添加",
                  },
                },
              },
              required: ["name", "desc"],
            },
            ui: {
              grid: { arraySpan: 24 },
              addTitle: "添加",
              optional: "(选填)",
              optionalHelp: {
                icon: "question-circle",
                text: "选填帮助",
              },
            },
          },
        },
      },
      data: {},
    };
  },
  methods: {
    async printData() {
      const valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      }
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
          name: i,
          desc: i,
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
