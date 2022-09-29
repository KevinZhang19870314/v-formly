<template>
  <div>
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
      <a-button type="primary" @click="setNameValue"> 设置姓名 </a-button>
      <a-button type="primary" @click="printData"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";
export default {
  name: "HomeView",
  data: function () {
    let self = this;
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
          auto: {
            type: "string",
            title: "自动完成",
            ui: {
              component: "autocomplete",
              placeholder: "auto complete",
              slotName: "datasource", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
              dataSource: [],
              handleSearch: function (value) {
                console.log(value);
                self.handleSearch(value);
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
              auto1: {
                type: "string",
                title: "自动完成",
                ui: {
                  component: "autocomplete",
                  placeholder: "auto complete 1",
                  slotName: "datasource1", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
                  dataSource: [],
                  handleSearch: function (value) {
                    console.log(value);
                    self.handleSearch1(value);
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
                  auto2: {
                    type: "string",
                    title: "自动完成",
                    ui: {
                      component: "autocomplete",
                      placeholder: "auto complete 2",
                      slotName: "datasource2", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
                      dataSource: [],
                      handleSearch: function (value) {
                        console.log(value);
                        self.handleSearch2(value);
                      },
                    },
                  },
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
        required: ["name"],
      },
      data: { showMotto: true },
      result: [],
      result1: [],
      result2: [],
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
    handleSearch(value) {
      let result;
      if (!value || value.indexOf("@") >= 0) {
        result = [];
      } else {
        result = ["gmail.com", "163.com", "qq.com"].map(
          (domain) => `${value}@${domain}`
        );
      }
      this.result = result;
    },
    handleSearch1(value) {
      let result;
      if (!value || value.indexOf("@") >= 0) {
        result = [];
      } else {
        result = ["gmail.com", "163.com", "qq.com"].map(
          (domain) => `${value}@${domain}`
        );
      }
      this.result1 = result;
    },
    handleSearch2(value) {
      let result;
      if (!value || value.indexOf("@") >= 0) {
        result = [];
      } else {
        result = ["gmail.com", "163.com", "qq.com"].map(
          (domain) => `${value}@${domain}`
        );
      }
      this.result2 = result;
    },
  },
};
</script>
<style lang="less" scoped></style>
