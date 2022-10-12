<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" layout="horizontal" />
    <div class="btns">
      <a-button type="primary" @click="printData"> 提交 </a-button>
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
      meta: {
        properties: {
          count: {
            type: "number",
            title: "数量(初始值)",
            ui: {
              component: "slider",
              change: (val) => console.log("change", val),
              afterChange: (val) => console.log("afterChange", val),
            },
            default: 10,
          },
          count1: {
            type: "number",
            title: "禁用状态",
            readOnly: true,
            ui: {
              component: "slider",
            },
            default: 10,
          },
          count2: {
            type: "number",
            title: "step(0.01)",
            ui: {
              component: "slider",
            },
            minimum: 0,
            maximum: 1,
            multipleOf: 0.01,
          },
          count3: {
            type: "number",
            title: "tipFormatter",
            ui: {
              component: "slider",
              tipFormatter: (val) => `${val}%`,
            },
          },
          count4: {
            type: "number",
            title: "隐藏 Tooltip",
            ui: {
              component: "slider",
              tipFormatter: null,
            },
          },
          count5: {
            type: "number",
            title: "始终显示 Tooltip",
            ui: {
              component: "slider",
              tooltipVisible: true,
            },
          },
          range: {
            type: "number",
            title: "范围(双滑块模式)",
            ui: {
              component: "slider",
              range: true,
            },
            default: [10, 20],
          },
          range1: {
            type: "number",
            title: "禁用状态(双滑块模式)",
            readOnly: true,
            ui: {
              component: "slider",
              range: true,
            },
            default: [10, 20],
          },
          range2: {
            type: "number",
            title: "marks",
            ui: {
              component: "slider",
              marks: {
                0: "0°C",
                26: "26°C",
                37: "37°C",
                100: (h) => ({
                  style: {
                    color: "#f50",
                  },
                  label: h("strong", null, "100°C"),
                }),
              },
            },
            default: 37,
          },
          range3: {
            type: "number",
            title: "marks range",
            ui: {
              component: "slider",
              range: true,
              marks: {
                0: "0°C",
                26: "26°C",
                37: "37°C",
                100: (h) => ({
                  style: {
                    color: "#f50",
                  },
                  label: h("strong", null, "100°C"),
                }),
              },
            },
            default: [26, 37],
          },
          range4: {
            type: "number",
            title: "included=false",
            ui: {
              component: "slider",
              included: false,
              marks: {
                0: "0°C",
                26: "26°C",
                37: "37°C",
                100: (h) => ({
                  style: {
                    color: "#f50",
                  },
                  label: h("strong", null, "100°C"),
                }),
              },
            },
            default: 37,
          },
          range5: {
            type: "number",
            title: "marks & step",
            ui: {
              component: "slider",
              marks: {
                0: "0°C",
                26: "26°C",
                37: "37°C",
                100: (h) => ({
                  style: {
                    color: "#f50",
                  },
                  label: h("strong", null, "100°C"),
                }),
              },
            },
            default: 0,
            multipleOf: 10,
          },
          range6: {
            type: "number",
            title: "dots",
            ui: {
              component: "slider",
              dots: true,
            },
            multipleOf: 10,
            default: 40,
          },
        },
      },
    };
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
