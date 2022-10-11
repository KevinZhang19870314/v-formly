<template>
  <div>
    <a-radio-group
      v-model="mode"
      style="margin-bottom: 32px; margin-left: 64px"
    >
      <a-radio-button value="horizontal"> 水平 </a-radio-button>
      <a-radio-button value="vertical"> 垂直 </a-radio-button>
      <a-radio-button value="inline"> 行内 </a-radio-button>
    </a-radio-group>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="mode"> </v-formly>
  </div>
</template>
<script>
export default {
  name: "LayoutView",
  data: () => {
    return {
      mode: "inline",
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
              errors: {
                required: "请输入姓名",
              },
            },
          },
          desc: {
            title: "描述",
            type: "string",
            default: "Base on technical, but not limited on it!",
            ui: {
              change: (val) => {
                console.log("val = ", val);
              },
            },
          },
          enable: {
            title: "启用",
            type: "boolean",
          },
        },
        required: ["name"],
      },
      data: { enable: true },
    };
  },
};
</script>
<style lang=""></style>
