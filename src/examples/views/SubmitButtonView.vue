<template>
  <div>
    <a-divider>button = 'default' 显示默认的提交按钮</a-divider>
    <v-formly
      layout="horizontal"
      v-model="data1"
      :schema="schema"
      :button="'default'"
      @form-submit="submit"
    />
    <a-divider>button = 'custom' 自定义提交按钮，传入 default slot</a-divider>
    <v-formly
      layout="horizontal"
      v-model="data2"
      :schema="schema"
      :button="'custom'"
      @form-submit="submit"
    >
      <template v-slot:default="{ loading, clearForm, submitForm }">
        <div class="btns">
          <a-button type="danger" @click="clearForm"> 自定义重置 </a-button>
          <a-button type="primary" @click="submitForm" :loading="loading">
            自定义提交
          </a-button>
        </div>
      </template>
    </v-formly>
    <a-divider>button = undefined 不需要提交按钮，完全由外部控制</a-divider>
    <v-formly ref="form" layout="horizontal" v-model="data3" :schema="schema" />
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="printData"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {},
      data2: {},
      data3: {},
      schema: {
        properties: {
          name: {
            title: "姓名",
            type: "string",
            ui: {
              showRequired: true,
            },
          },
        },
        required: ["name"],
      },
    };
  },
  methods: {
    submit(value) {
      console.log(value);
    },
    clear() {
      this.data3 = null;
    },
    async printData() {
      const valid = await this.$refs.form.validate();
      if (valid) {
        console.log(this.data3);
      }
    },
  },
};
</script>
<style lang="less" scoped></style>
