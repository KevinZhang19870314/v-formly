# 自定义组件

v-formly 内置了很多组件，一般业务场景基本可以满足，除了内置组件外，v-formly 还提供了自定义组件的能力。

## 自定义组件需要遵循一定的规则，总的来说有四步：

### 1. 组件命名

通常我们以`v-${id}`来命名我们的组件，其中`id`代表你注册时的组件`id`（`registerFormComponent("v-string", VString)`中的第一个参数）。

### 2. 导入 mixin

导入 mixin`componentMixin`到组件中，此 mixin 包含了一些通过的`props`、`data`等供组件使用。

### 3. 新建并初始化 context

新建一个 context js 类，比如`string.meta.js`, 在组件的`data`中初始化 context，例如：

```vue
data() { return { context: new StringMeta(this.state, this.id, this.meta), }; },
```

### 4. 绑定`context.value`

v-formly 中的每个组件都对应一个 context，其中包含了组件的数据存储及校验逻辑等，我们需要把`context.value`绑定到组件的模板中去，这样组件才能响应数据的变化。

## 自定义 Password 组件

好了，我们对自定义组件应该有了一个大致的了解，下面我们举例说明如何创建一个自定义 Password 组件。

### 代码演示

我们看到表单项“密码”就是我们自定义的组件，其实我们在[String 文本框](/zh/components/string.html)中通过内置的`v-string`组件也实现了 Password，但是比较一下代码就知道，`v-string`中是通过传入`slot`然后增加了一些逻辑来实现了它。

我们在来看下下面的代码，没有任何多余的逻辑处理，只是在`ui`中增加了一行`component: "password"`就可以了，剩余的逻辑都在自定义组件里面帮我们实现了，所以对终端用户来说创建表单非常简单！

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :meta="meta"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 重置 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PasswordView",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          name: {
            title: "用户名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
              errors: {
                required: "请输入用户名",
              },
            },
          },
          password: {
            title: "密码",
            type: "string",
            default: "123456",
            ui: {
              component: "password",
              showRequired: true,
              errors: {
                required: "请输入密码",
              },
            },
          },
        },
        required: ["name", "password"],
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

### 具体实现
