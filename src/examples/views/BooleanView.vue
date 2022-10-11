<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta">
      <!-- boolean3 -->
      <template v-slot:boolean3_checked_icon>
        <a-icon type="check" />
      </template>
      <template v-slot:boolean3_unchecked_icon>
        <a-icon type="close" />
      </template>
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";
export default {
  name: "BooleanView",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          boolean1: {
            title: "基本用法",
            type: "boolean",
            default: true,
            ui: {
              change: (val, event) => console.log(val, event),
            },
          },
          boolean2: {
            title: "文字和图标",
            type: "boolean",
            ui: {
              checkedChildren: "开",
              unCheckedChildren: "关",
            },
          },
          boolean3: {
            title: "文字和图标slot",
            type: "boolean",
            default: true,
            ui: {
              slotNameOfCheckedChildren: "boolean3_checked_icon",
              slotNameOfUnCheckedChildren: "boolean3_unchecked_icon",
            },
          },
          boolean4: {
            title: "加载中",
            type: "boolean",
            default: true,
            ui: {
              loading: true,
            },
          },
          boolean5: {
            title: "不可用",
            type: "boolean",
            default: true,
            readOnly: true,
          },
          obj: {
            type: "object",
            properties: {
              boolean6_1: {
                title: "大",
                type: "boolean",
                default: true,
              },
              boolean6_2: {
                title: "小",
                type: "boolean",
                ui: {
                  size: "small",
                },
              },
            },
          },
        },
        required: [],
      },
      data: {},
    };
  },
  components: {
    VFormly,
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
