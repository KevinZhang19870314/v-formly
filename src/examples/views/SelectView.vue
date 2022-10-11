<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" layout="horizontal">
      <template v-slot:select6>
        <a-spin slot="notFoundContent" size="small" />
      </template>
      <template v-slot:select8SelectOption>
        <a-select-option
          :value="item.value"
          :label="item.label"
          v-for="(item, index) in select8Options"
          :key="index"
        >
          <span role="img"> {{ item.icon }} </span>
          {{ item.text }}
        </a-select-option>
      </template>
      <template v-slot:select9SelectGroupOption>
        <a-select-opt-group>
          <span slot="label"><a-icon type="user" />Manager</span>
          <a-select-option value="jack"> Jack </a-select-option>
          <a-select-option value="lucy"> Lucy </a-select-option>
        </a-select-opt-group>
        <a-select-opt-group label="Engineer">
          <a-select-option value="Kevin"> kevin </a-select-option>
        </a-select-opt-group>
      </template>
    </v-formly>
    <div class="btns">
      <a-button type="primary" @click="printData"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";
import debounce from "lodash/debounce";
const provinceData = [
  { value: "Zhejiang", label: "浙江" },
  { value: "Jiangsu", label: "江苏" },
];
const cityData = {
  Zhejiang: [
    { value: "Hangzhou", label: "杭州" },
    { value: "Ningbo", label: "宁波" },
    { value: "Wenzhou", label: "温州" },
  ],
  Jiangsu: [
    { value: "Nanjing", label: "南京" },
    { value: "Suzhou", label: "苏州" },
    { value: "Zhenjiang", label: "镇江" },
  ],
};

let timeout;
let currentValue;

function select5Fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    Promise.resolve().then(() => {
      if (!currentValue) {
        callback([]);
      }

      if (currentValue && currentValue === value) {
        const data = [];
        for (let i = 0; i < 10; i++) {
          data.push({
            value: `${currentValue} ${i}`,
            label: `${currentValue} ${i}`,
          });
        }
        callback(data);
      }
    });
  }

  timeout = setTimeout(fake, 500);
}

const select7Options = [
  { label: "Apples", value: "apples" },
  { label: "Nails", value: "nails" },
  { label: "Bananas", value: "bananas" },
  { label: "Helicopters", value: "helicopters" },
];
const select8Options = [
  { label: "China", value: "china", icon: "🇨🇳", text: "China (中国)" },
  { label: "USA", value: "usa", icon: "🇺🇸", text: "USA (美国)" },
  { label: "Japan", value: "japan", icon: "🇯🇵", text: "Japan (日本)" },
  { label: "Korea", value: "korea", icon: "🇰🇷", text: "Korea (韩国)" },
];
export default {
  components: {
    VFormly,
  },
  data() {
    this.lastFetchId = 0;
    this.select6FetchUser = debounce(this.select6FetchUser, 800);
    return {
      data: {},
      meta: {
        properties: {
          select: {
            type: "string",
            title: "姓名",
            ui: {
              component: "select",
              labelInValue: false,
              loading: true,
              options: [
                { value: "Jack", label: "杰克", title: "title Jack" },
                { value: "Lucy", label: "露西", disabled: true },
                { value: "Kevin", label: "凯文" },
              ],
              change: (val, option) => console.log("change", val, option),
              select: (val, option) => console.log("select", val, option),
            },
            default: "Kevin",
          },
          select1: {
            type: "string",
            title: "禁用",
            readOnly: true,
            ui: {
              component: "select",
              options: [
                { value: "L", label: "初级" },
                { value: "M", label: "中级" },
                { value: "H", label: "高级" },
              ],
              change: (val, option) => console.log("change", val, option),
              select: (val, option) => console.log("select", val, option),
            },
            default: "中级",
          },
          select2: {
            type: "string",
            title: "加载中",
            ui: {
              component: "select",
              loading: true,
              options: [
                { value: "Apple", label: "苹果" },
                { value: "Orange", label: "橘子" },
                { value: "Banana", label: "香蕉" },
              ],
              change: (val, option) => console.log("change", val, option),
              select: (val, option) => console.log("select", val, option),
            },
            default: "香蕉",
          },
          select3: {
            type: "string",
            title: "labelInValue",
            ui: {
              component: "select",
              labelInValue: true,
              options: [
                { value: "Apple", label: "苹果" },
                { value: "Orange", label: "橘子" },
                { value: "Banana", label: "香蕉" },
              ],
              change: (val) => console.log("change", val),
              select: (val) => console.log("select", val),
            },
            default: { key: "Orange", label: "橘子" },
          },
          select4_1: {
            type: "string",
            title: "省",
            ui: {
              component: "select",
              options: provinceData,
              grid: {
                span: 12,
              },
              change: (val) => {
                const context = this.$refs.form.getContext("/select4_2");
                context.value = null;
                context.ui.options = cityData[val];
              },
            },
          },
          select4_2: {
            type: "string",
            title: "市",
            ui: {
              component: "select",
              options: cityData["Zhejiang"],
              grid: {
                span: 12,
              },
            },
          },
          select5: {
            type: "string",
            title: "搜索和远程数据结合",
            ui: {
              component: "select",
              placeholder: "input search text",
              defaultActiveFirstOption: false,
              options: [],
              showSearch: true,
              showArrow: false,
              filterOption: false,
              notFoundContent: null,
              change: (val) => {
                const context = this.$refs.form.getContext("/select5");
                context.value = val;
                select5Fetch(val, (data) => {
                  context.ui.options = data;
                });
              },
              search: (value) => {
                select5Fetch(value, (data) => {
                  const context = this.$refs.form.getContext("/select5");
                  context.ui.options = data;
                });
              },
            },
          },
          select6: {
            type: "string",
            title: "远程搜索，节流控制",
            ui: {
              component: "select",
              slotNameOfNotFoundContent: "select6",
              mode: "multiple",
              labelInValue: true,
              placeholder: "Select users",
              filterOption: false,
              options: [],
              search: this.select6FetchUser,
            },
          },
          select7: {
            type: "string",
            title: "隐藏已选项",
            ui: {
              component: "select",
              mode: "multiple",
              placeholder: "Inserted are removed",
              options: select7Options,
              change: (val) => {
                const context = this.$refs.form.getContext("/select7");
                context.ui.options = select7Options.filter(
                  (f) => !val.includes(f.value)
                );
              },
            },
          },
          select8: {
            type: "string",
            title: "定制回填内容",
            ui: {
              component: "select",
              mode: "multiple",
              placeholder: "select one country",
              optionLabelProp: "label",
              slotNameOfSelectDefault: "select8SelectOption",
            },
          },
          select9: {
            type: "string",
            title: "选项分组",
            ui: {
              component: "select",
              slotNameOfSelectDefault: "select9SelectGroupOption",
            },
            default: "lucy",
          },
        },
      },
      select8Options: select8Options,
    };
  },
  methods: {
    async printData() {
      let valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data);
      } else {
        console.log("invalid", valid);
      }
    },
    select6FetchUser(value) {
      console.log("fetching user", value);
      const context = this.$refs.form.getContext("/select6");
      this.lastFetchId += 1;
      const fetchId = this.lastFetchId;
      fetch("/api/?results=5")
        .then((response) => response.json())
        .then((body) => {
          if (fetchId !== this.lastFetchId) {
            // for fetch callback order
            return;
          }
          const data = body.results.map((user) => ({
            label: `${user.name.first} ${user.name.last}`,
            value: user.login.username,
          }));
          context.ui.options = data;
        });
    },
  },
};
</script>
<style lang="less" scoped></style>
