<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" :layout="'horizontal'">
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
          {{ email + '_test' }}
        </a-select-option>
      </template>
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
    let self = this;
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
          auto: {
            type: "string",
            title: "自动完成",
            ui: {
              component: "autocomplete",
              placeholder: "auto complete",
              slotNameOfDataSource: "datasource", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
              dataSource: [],
              handleSearch: function (value) {
                console.log(value);
                self.handleSearch(value);
              },
            },
          },
          obj: {
            type: "object",
            properties: {
              auto1: {
                type: "string",
                title: "自动完成1",
                ui: {
                  component: "autocomplete",
                  placeholder: "auto complete 1",
                  slotNameOfDataSource: "datasource1", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
                  dataSource: [],
                  handleSearch: function (value) {
                    console.log(value);
                    self.handleSearch1(value);
                  },
                },
              },
              obj1: {
                type: "object",
                properties: {
                  auto2: {
                    type: "string",
                    title: "自动完成2",
                    ui: {
                      component: "autocomplete",
                      placeholder: "auto complete 2",
                      slotNameOfDataSource: "datasource2", // slotName优先级高于dataSource，即有slot用slot，否则用dataSource数组
                      dataSource: [],
                      handleSearch: function (value) {
                        console.log(value);
                        self.handleSearch2(value);
                      },
                    },
                  },
                },
              },
            },
          },
        },
        required: ["name"],
      },
      data: { name: "kevin zhang" },
      result: [],
      result1: [],
      result2: [],
    };
  },
  components: {
    VFormly,
  },
  methods: {
    printData() {
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
