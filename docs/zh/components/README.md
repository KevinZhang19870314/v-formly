# 组件介绍

v-formly 内置了一些基础组件，包括常用的输入框、选择框、单选、多选、下拉框、上传等组件，覆盖了大多数业务所需要的组件需求，如果这些内置组件不足以满足你的业务，你也可以[自定义组件](/zh/components/custom-components.html)。

## 内置组件属性

v-formly 中的内置组件为了保证与原生 AntDv 组件的功能保持一致性，尽量不破坏原有属性名称和定义，所以在下述具体组件介绍中，**我们只列出属性中不一致的或新添加的，一致的地方请参考 AntDv 文档**，我们列出了组件对应关系如下，请自行查阅：

### 内置组件与 AntDv 组件一一对应关系

::: details 内置组件与 AntDv 组件一一对应关系 =>

[AutoComplete 自动完成](/zh/components/autocomplete.html) -> [AutoComplete 自动完成](https://1x.antdv.com/components/auto-complete-cn/)

[Boolean 开关](/zh/components/boolean.html) -> [Switch 开关](https://1x.antdv.com/components/switch-cn/)

[Cascader 级联选择](/zh/components/cascader.html) -> [Cascader 级联选择](https://1x.antdv.com/components/cascader-cn/)

[Checkbox 多选框](/zh/components/checkbox.html) -> [Checkbox 多选框](https://1x.antdv.com/components/checkbox-cn/)

[Date 日期选择框](/zh/components/date.html) -> [DatePicker 日期选择框](https://1x.antdv.com/components/date-picker-cn/)

[Number 数字输入框](/zh/components/number.html) -> [InputNumber 数字输入框](https://1x.antdv.com/components/input-number-cn/)

[Radio 单选框](/zh/components/radio.html) -> [Radio 单选框](https://1x.antdv.com/components/radio-cn/)

[Rate 评分](/zh/components/rate.html) -> [Rate 评分](https://1x.antdv.com/components/rate-cn/)

[Select 选择器](/zh/components/select.html) -> [Select 选择器](https://1x.antdv.com/components/select-cn/)

[Slider 滑动输入条](/zh/components/slider.html) -> [Slider 滑动输入条](https://1x.antdv.com/components/slider-cn/)

[String 文本框](/zh/components/string.html) -> [Input 输入框](https://1x.antdv.com/components/input-cn/)

[Tag 标签](/zh/components/tag.html) -> [Tag 标签](https://1x.antdv.com/components/tag-cn/)

[Textarea 多行文本框](/zh/components/textarea.html) -> [Input 输入框](https://1x.antdv.com/components/input-cn/#components-input-demo-textarea)

[Time 时间选择器](/zh/components/time.html) -> [TimePicker 时间选择框](https://1x.antdv.com/components/time-picker-cn/)
:::

## 关于`slot`的传递

v-formly 中的内置组件封装的是 AntDv 的表单组件，这样就带来一个问题，一些类型为`slot`的属性我们无法透传，比如`Input 输入框`的`addonBefore`属性，它即可以直接传字符串，这个没问题，但是`slot`我们没法传进去，因为我们对`a-input`做了封装，在使用 v-formly 的时候我们无法直接接触`a-input`组件，所以这里我让模板`<template>xxx</template>`一级一级的从父组件传递到子组件，再传递到孙子组件，直到传递到 AntDv 原生组件为止。下面我们举例说明一下：

::: demo

```vue
<template>
  <div>
    <v-formly ref="form" v-model="formData" :meta="meta">
      <!-- string1 -->
      <template v-slot:string1_prefix>
        <a-icon type="user" />
      </template>
      <template v-slot:string1_1_suffix>
        <a-tooltip title="Extra information">
          <a-icon type="info-circle" style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </v-formly>
  </div>
</template>

<script>
export default {
  name: "StringView",
  data: function () {
    return {
      meta: {
        type: "object",
        properties: {
          string1: {
            title: "用户名",
            type: "string",
            ui: {
              placeholder: "请输入用户名",
              slotNameOfPrefix: "string1_prefix",
              slotNameOfSuffix: "string1_1_suffix",
            },
          },
        },
      },
      formData: {},
    };
  },
};
</script>
<style lang="less" scoped></style>
```

:::

从上面的代码中，我们可以看到，我们这里的前缀使用了`slot`来传值，我们只需要在`meta`里面定义`slotNameOfPrefix`来标明它的`slot name`，然后在`v-formly`模板标签里面定义我们需要传递的模板内容，从而让表单知道我需要把这个`slot`模板传递到 AntDv 的输入框，这样就达到了`slot`的传递。

::: tip
**v-formly 的每个表单项的属性中如果有需要传递`slot`的，必须保证`slot name`的唯一（比如这里的`slotNameOfPrefix`和`slotNameOfSuffix`的值必须不一样），否则无法识别或者识别错误。**
:::
