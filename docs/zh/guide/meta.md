# 元数据

元数据`meta`定义了标准的 JSON Schema 结构和非标准的嵌套在 JSON Schema 中的`ui`属性，通过定义元数据`meta`并解析它来构建我们的表单。

一个最简单的 meta 结构如下：

```js
meta = {
  type: "object", // 可有可无，默认会强制为 `object`
  properties: {},
};
```

v-formly 中通过解析`meta`并实例化存储`meta`结构的类为`context`，即表单组件的上下文，其中存储着表单组件的诸如`id`、`value`、`type`等等信息，以及组件的处理逻辑和校验等。这样，我们就可以认为 **类`meta`实例化后就是`context`**。我们目前定义的的`meta`有以下几个，分别对应[AJV中的JSON数据基本类型](https://ajv.js.org/json-schema.html#json-data-type)：

```md
|-base.meta.js <!-- 此类为基类，其他类都继承于它 -->
  |-array.meta.js
  |-boolean.meta.js
  |-number.meta.js
  |-object.meta.js
  |-string.meta.js
```

下面我们分别介绍`meta`中的标准JSON Schema和`ui`。

## JSON Schema

// TODO

## UI

// TODO