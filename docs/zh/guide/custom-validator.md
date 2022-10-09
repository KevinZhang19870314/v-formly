# 自定义校验

v-formly 除了支持标准的[JSON Schema](https://json-schema.org/)和[Ajv](https://ajv.js.org/)校验以外，还支持自定义校验规则及错误文本内容。

::: tip 注意
不管采用哪种方式来构建错误文本，都必须通过`keyword`来区分错误类型。
:::
