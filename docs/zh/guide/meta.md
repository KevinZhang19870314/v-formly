# 元数据

元数据`meta`定义了标准的 JSON Schema 结构和非标准的嵌套在 JSON Schema 中的`ui`属性，通过定义元数据`meta`并解析它来构建我们的表单。

一个最简单的 meta 结构如下：

```js
meta = {
  type: "object", // 可有可无，默认会强制为 `object`
  properties: {},
};
```

v-formly 中通过解析`meta`并实例化存储`meta`结构的类为`context`，即表单组件的上下文，其中存储着表单组件的诸如`id`、`value`、`type`等等信息，以及组件的处理逻辑和校验等。这样，我们就可以认为 **类`meta`实例化后就是`context`**。我们目前定义的的`meta`有以下几个，分别对应[AJV 中的 JSON 数据基本类型](https://ajv.js.org/json-schema.html#json-data-type)：

```md
|-base.meta.js <!-- 此类为基类，其他类都继承于它 -->
|-array.meta.js
|-boolean.meta.js
|-number.meta.js
|-object.meta.js
|-string.meta.js
```

::: tip
<strong>`meta`</strong>是 JSON 数据结构，<strong>类`meta`</strong>是存储`meta`等数据结构的 js 类。
:::

下面我们分别介绍`meta`中的标准 JSON Schema 和`ui`。

## JSON Schema

JSON Schema 有完整的[文档说明](https://json-schema.org/)，以下为 v-formly 中使用的一些属性说明。

### 常规类

| 参数     | 说明                               | 类型                                 | 默认值   |
| -------- | ---------------------------------- | ------------------------------------ | -------- |
| `[type]` | 数据类型，支持 JavaScript 基础类型 | `number,string,boolean,object,array` | `object` |
| `[enum]` | 枚举，静态数据源                   | `any[]`                              | -        |

### 数值类型

| 参数                 | 说明                      | 类型      | 默认值 |
| -------------------- | ------------------------- | --------- | ------ |
| `[minimum]`          | 最小值                    | `number`  | -      |
| `[exclusiveMinimum]` | 约束是否包括 `minimum` 值 | `boolean` | -      |
| `[maximum]`          | 最大值                    | `number`  | -      |
| `[exclusiveMaximum]` | 约束是否包括 `maximum` 值 | `boolean` | -      |
| `[multipleOf]`       | 倍数                      | `number`  | -      |

### 字符串类型

| 参数          | 说明                         | 类型     | 默认值 |
| ------------- | ---------------------------- | -------- | ------ |
| `[maxLength]` | 定义字符串的最大长度         | `number` | -      |
| `[minLength]` | 定义字符串的最小长度         | `number` | -      |
| `[pattern]`   | 验证输入字段正则表达式字符串 | `string` | -      |

### 数组类型

| 参数                | 说明                                                                   | 类型      | 默认值 |
| ------------------- | ---------------------------------------------------------------------- | --------- | ------ |
| `[items]`           | 数组元素类型描述，只支持数组对象，若需要基础类型数组可通过其他部件支持 | `object`  | -      |
| `[minItems]`        | 约束数组最小的元素个数                                                 | `number`  | -      |
| `[maxItems]`        | 约束数组最大的元素个数                                                 | `number`  | -      |
| `[uniqueItems]`     | 约束数组每个元素都不相同(TODO)                                         | `boolean` | -      |
| `[additionalItems]` | 数组额外元素的校验规则(TODO)                                           | `object`  | -      |

### 对象类型

| 参数              | 说明                         | 类型                        | 默认值 |
| ----------------- | ---------------------------- | --------------------------- | ------ |
| `[maxProperties]` | 最大属性个数，必须是非负整数 | `number`                    | -      |
| `[minProperties]` | 最小属性个数，必须是非负整数 | `number`                    | -      |
| `[required]`      | 必需属性                     | `string[]`                  | -      |
| `[properties]`    | 定义属性                     | `{ [key: string]: object }` | -      |

### 条件类(TODO: 未测试)

| 参数     | 说明     | 类型     | 默认值 |
| -------- | -------- | -------- | ------ |
| `[if]`   | 条件验证 | `object` | -      |
| `[then]` | 条件验证 | `object` | -      |
| `[else]` | 条件验证 | `object` | -      |

### 逻辑类

| 参数      | 说明                                                     | 类型    | 默认值 |
| --------- | -------------------------------------------------------- | ------- | ------ |
| `[allOf]` | **不建议** 使用，可用 `required` 替代                    | `any[]` | -      |
| `[anyOf]` | **不建议** 使用，可用 `required` 和 `minProperties` 替代 | `any[]` | -      |
| `[oneOf]` | **不建议** 使用，值必须是其中之一                        | `any[]` | -      |

### 格式与视觉类

| 参数            | 说明                                                                                        | 类型      | 默认值 |
| --------------- | ------------------------------------------------------------------------------------------- | --------- | ------ |
| `[title]`       | 属性描述                                                                                    | `string`  | -      |
| `[description]` | 属性目的性解释                                                                              | `string`  | -      |
| `[default]`     | 默认值                                                                                      | `any`     | -      |
| `[readOnly]`    | 是否只读状态，等同 `disabled`                                                               | `boolean` | -      |
| `[format]`      | 数据格式，[文档](http://json-schema.org/latest/json-schema-validation.html#rfc.section.7.3) | `string`  | -      |

### 非标准

| 参数   | 说明                                                     | 类型  | 默认值 |
| ------ | -------------------------------------------------------- | ----- | ------ |
| `[ui]` | 指定 UI 配置信息，优先级高于 `v-formly` 组件 `ui` 属性值 | `any` | -      |

## UI

// TODO
