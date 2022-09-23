<template>
  <div class="wapper">
    <v-formly ref="form" v-model="data" :schema="schema" :layout="'horizontal'">
      <!-- <template v-slot:datasource>
        Auto Complete
      </template> -->
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
      <a-button type="primary" @click="log"> log </a-button>
      <a-button type="primary" @click="log1"> log1 </a-button>
      <a-button type="primary" @click="add"> add </a-button>
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
      schema: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
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
    printData() {
      console.log(this.data);
    },
    log() {
      const ctx = this.$refs.form.getContext("product");
      console.log(ctx.value);
      const arr = [];
      for (let i = 0; i < 100; i++) {
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
      ctx.restValue(arr);
    },
    log1() {
      const ctx = this.$refs.form.getContext("product");
      console.log(ctx.value);
      ctx.restValue([]);
    },
    add() {
      const ctx = this.$refs.form.getContext("product");
      ctx.add();
    },
  },
};
</script>
<style lang="less" scoped>
.wapper {
  padding: 0 100px;

  .btns {
    display: flex;
    justify-content: flex-end;

    .ant-btn {
      margin-right: 8px;
    }
  }
}
</style>
