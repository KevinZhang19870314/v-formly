<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema" layout="horizontal">
      <template v-slot:testSlot>
        <a-icon slot="character" type="heart" />
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
  components: {
    VFormly,
  },
  data() {
    return {
      data: {},
      schema: {
        properties: {
          rate: {
            type: "number",
            title: "评级",
            ui: {
              component: "rate",
              change: (val) => console.log("change", val),
              hoverChange: (val) => console.log("hoverChange", val),
            },
            default: 4,
          },
          rate1: {
            type: "number",
            title: "支持选中半星",
            maximum: 5,
            default: 4.5,
            ui: {
              component: "rate",
              allowHalf: true,
            },
          },
          rate2: {
            type: "number",
            title: "maximum=10",
            maximum: 10,
            default: 4,
            ui: {
              component: "rate",
            },
          },
          rate3: {
            type: "number",
            title: "只读",
            readOnly: true,
            ui: {
              component: "rate",
            },
            default: 1,
          },
          rate4: {
            type: "number",
            title: "禁用点击后清除",
            ui: {
              component: "rate",
              allowClear: false,
            },
            default: 1,
          },
          rate5: {
            type: "number",
            title: "自定义提示信息",
            ui: {
              component: "rate",
              tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful']
            },
            default: 1,
          },
          rate6: {
            type: "number",
            title: "自定义字符 string",
            ui: {
              component: "rate",
              character: 'A'
            },
            default: 1,
          },
          rate7: {
            type: "number",
            title: "自定义字符 slot",
            ui: {
              component: "rate",
              slotNameOfCharacter: "testSlot", // slot
            },
            default: 1,
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
