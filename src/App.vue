<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 'horizontal','vertical','inline' -->
    <h1>horizontal</h1>
    <v-formly
      ref="form"
      v-model="data"
      :schema="schema"
      :layout="'horizontal'"
    ></v-formly>
    <div class="btns">
      <a-button type="primary" @click="setNameValue"> 设置姓名 </a-button>
      <a-button type="primary" @click="printData"> 打印FormData </a-button>
    </div>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";

export default {
  name: "App",
  data: () => {
    return {
      schema: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
          },
          desc: {
            title: "描述",
            type: "string",
            ui: {
              change: (val) => {
                console.log("val = ", val);
              },
            },
          },
          showMotto: {
            title: "显示座右铭",
            type: "boolean",
            default: true,
          },
          motto: {
            title: "座右铭",
            type: "string",
            ui: {
              hidden: true,
              // eslint-disable-next-line no-unused-vars
              visibleIf: {
                showMotto: function (context, id, value) {
                  // context 在第一次的初始化的时候为空，因为这个时候还没有添加具体的组件上下文
                  console.log(this);
                  return value || false;
                },
              },
            },
          },
          obj: {
            type: "object",
            properties: {
              name1: {
                title: "姓名1",
                type: "string",
                description: "属性目的性解释",
                ui: {
                  showRequired: true,
                  placeholder: "请输入姓名",
                  optional: "(选填)",
                  optionalHelp: {
                    icon: "question-circle",
                    text: "选填帮助",
                  },
                },
              },
              showDesc1: {
                title: "显示描述1",
                type: "boolean",
              },
              desc1: {
                title: "描述1",
                type: "string",
                ui: {
                  hidden: true,
                  // eslint-disable-next-line no-unused-vars
                  visibleIf: {
                    "/obj/showDesc1": (context, id, value) => {
                      // context 在第一次的初始化的时候为空，因为这个时候还没有添加具体的组件上下文
                      return value || false;
                    },
                  },
                },
              },
              obj1: {
                type: "object",
                properties: {
                  enable: {
                    title: "是否启用",
                    type: "boolean",
                    ui: {
                      showRequired: true,
                    },
                  },
                },
                required: ["enable"],
              },
            },
            required: ["name1"],
          },
          product: {
            type: "array",
            title: "产品清单",
            maxItems: 1,
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
                  maxItems: 1,
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
                    optional: "(选填)",
                    optionalHelp: {
                      icon: "question-circle",
                      text: "选填帮助",
                    },
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
        // required: ["name", "desc"],
      },
      data: {},
    };
  },
  components: {
    VFormly,
  },
  methods: {
    setNameValue() {
      const nameContext = this.$refs.form.getContext("/obj/name1");
      console.log(nameContext.value);
      nameContext.value = "kevin";
    },
    printData() {
      // console.log(this.$refs.form.formData);
      console.log(this.data);
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
