# Date 日期选择框

输入或选择日期的控件。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          month: {
            type: "string",
            title: "月份",
            default: "May",
            ui: {
              component: "date",
              mode: "month",
              valueFormat: "MMMM",
            },
          },
          week: {
            type: "string",
            title: "周",
            ui: {
              component: "date",
              mode: "week",
            },
          },
          range: {
            type: "string",
            title: "日期范围",
            ui: {
              component: "date",
              mode: "range",
            },
          },
          date: {
            type: "string",
            title: "日期",
            ui: {
              component: "date",
              mode: "date",
              valueFormat: "X",
            },
          },
        },
        required: [],
      },
      data: {},
    };
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
```

:::

## API

### meta 属性

| 成员        | 说明     | 类型      | 默认值 |
| ----------- | -------- | --------- | ------ |
| `:readOnly` | 禁用状态 | `boolean` | -      |

### meta.ui 属性

// TODO:一下为copy过来的需要更新
| 成员                           | 说明                            | 类型                                      | 默认值    |
| ------------------------------ | ------------------------------- | ----------------------------------------- | --------- |
| `:checkedChildren`             | 选中时的内容                    | `string`                                  | -         |
| `:slotNameOfCheckedChildren`   | 选中时的内容，slot 名称         | `string`                                  | -         |
| `:defaultChecked`              | 初始是否选中                    | `boolean`                                 | `false`   |
| `:disabled`                    | 是否禁用                        | `boolean`                                 | `false`   |
| `:loading`                     | 加载中的开关                    | `boolean`                                 | `false`   |
| `:size`                        | 开关大小，可选值：default small | `default,small`                           | `default` |
| `:unCheckedChildren`           | 非选中时的内容                  | `string`                                  | -         |
| `:slotNameOfUnCheckedChildren` | 非选中时的内容，slot 名称       | `string`                                  | -         |
| `@change`                      | 输入框内容变化时的回调          | `Function(checked:Boolean, event: Event)` | -         |
