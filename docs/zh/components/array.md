# Array 数组

创建对象数组。

## 代码演示

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta" :layout="'horizontal'">
    </v-formly>
    <div class="btns">
      <a-button type="primary" @click="add"> 添加</a-button>
      <a-button type="primary" @click="setName"> 设置名称 </a-button>
      <a-button type="primary" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="printData"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
          },
          product: {
            type: "array",
            title: "产品清单",
            // maxItems: 3,
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
                    grid: { arraySpan: 24 },
                    addTitle: "添加",
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
      },
      data: {},
    };
  },
  methods: {
    add() {
      const ctx = this.$refs.form.getContext("/product");
      ctx.add();
    },
    clear() {
      const ctx = this.$refs.form.getContext("/product");
      ctx.value = [];
    },
    setName() {
      const ctx = this.$refs.form.getContext("/product/0/name");
      if (ctx) {
        ctx.value = "kevin zhang";
      }
    },
    async printData() {
      const valid = await this.$refs.form.validate();
      if (valid) {
        this.$message.info(JSON.stringify(this.data));
      }
    },
  },
};
</script>
```

:::

## API

**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**

### meta 属性

| 成员        | 说明                   | 类型       | 默认值 |
| ----------- | ---------------------- | ---------- | ------ |
| `:items`    | 数组元素类型描述       | `object[]` |        |
| `:minItems` | 约束数组最小的元素个数 | `number`   | -      |
| `:maxItems` | 约束数组最大的元素个数 | `number`   | -      |
| `:readOnly` | 禁用状态               | `boolean`  | -      |

### meta.ui 属性

| 成员           | 说明                             | 类型              | 默认值   |
| -------------- | -------------------------------- | ----------------- | -------- |
| `:addTitle`    | 添加按钮文本                     | `string`          | `添加`   |
| `:addType`     | 添加按钮类型，等同 `button type` | `string`          | `dashed` |
| `:removable`   | 是否包含移除按钮                 | `boolean`         | `true`   |
| `:removeTitle` | 移除按钮文本                     | `string`          | `移除`   |
| `:required`    | 当前项是否为必填，仅影响样式     | `boolean`         | -        |
| `@add`         | 添加回调，返回值为实例 id        | `function(id)`    | -        |
| `@remove`      | 移除回调，返回值为实例 index     | `function(index)` | -        |

## 布局

数组的布局分为数组本身以及数组元素布局，arraySpan 决定每个数组元素占栅格数值。

::: demo

```vue
<template>
  <div>
    <v-formly v-model="data" :meta="meta" :layout="'horizontal'" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      meta: {
        type: "object",
        properties: {
          product: {
            type: "array",
            title: "产品清单",
            items: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  title: "名称",
                },
                desc: { type: "string", title: "简介" },
              },
            },
            ui: { grid: { arraySpan: 20 } },
          },
        },
      },
      data: {},
    };
  },
  methods: {
    add() {
      const ctx = this.$refs.form.getContext("/product");
      ctx.add();
    },
    clear() {
      const ctx = this.$refs.form.getContext("/product");
      ctx.value = [];
    },
    setName() {
      const ctx = this.$refs.form.getContext("/product/0/name");
      if (ctx) {
        ctx.value = "kevin zhang";
      }
    },
    async printData() {
      const valid = await this.$refs.form.validate();
      if (valid) {
        this.$message.info(JSON.stringify(this.data));
      }
    },
  },
};
</script>
```

:::
