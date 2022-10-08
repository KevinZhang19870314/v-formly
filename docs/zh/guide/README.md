# 介绍

v-formly 是 vue 的动态（JSON 驱动）表单库。它通过[JSON Schema](https://json-schema.org/)和[Ajv Validator](https://ajv.js.org/)结合生成复杂的动态表单即校验，快速、简洁、高效。通过使用 v-formly 通过 JSON 及对应的组件库即可快速构造一个 Form 表单，目前支持 Vue 2.x & [Ant Design of Vue v1](https://1x.antdv.com/docs/vue/introduce-cn/)，Vue 2.x 和 Vue 3.x 的其他 UI 库（AntDv v3，ElementUI 等）支持正在开发中。

v-formly 内置封装了所有的在 Ant Design of Vue 中的`Data Entry`下面的组件，同时 v-formly 也支持[自定义封装组件](TODO markdown)，从而可以让你轻松构建复杂的动态表单。

## 一个简单示例

```vue
<template>
  <div>
    <v-formly ref="form" v-model="data" :schema="schema"> </v-formly>
    <div class="btns">
      <a-button type="danger" @click="clear"> 清除 </a-button>
      <a-button type="primary" @click="submit"> 提交 </a-button>
    </div>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";
export default {
  name: "HomeView",
  data: function () {
    return {
      schema: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
            default: "kevin",
            ui: {
              showRequired: true,
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
  components: {
    VFormly,
  },
  methods: {
    clear() {
      this.data = null;
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

事实上，一个 VuePress 网站是一个由 [Vue](http://vuejs.org/)、[Vue Router](https://github.com/vuejs/vue-router) 和 [webpack](http://webpack.js.org/) 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML。这种做法的灵感来源于 [Nuxt](https://nuxtjs.org/) 的 `nuxt generate` 命令，以及其他的一些项目，比如 [Gatsby](https://www.gatsbyjs.org/)。

## Features

**内置的 Markdown 拓展**

- [目录](../guide/markdown.md#目录)
- [自定义容器](../guide/markdown.md#自定义容器)
- [代码块中的行高亮](../guide/markdown.md#代码块中的行高亮)
- [行号](../guide/markdown.md#行号)
- [导入代码段](../guide/markdown.md#导入代码段)

**在 Markdown 中 使用 Vue**

- [模板语法](../guide/using-vue.md#模板语法)
- [使用组件](../guide/using-vue.md#使用组件)

**Vue 驱动的自定义主题系统**

- [网站和页面的元数据](../theme/writing-a-theme.md#网站和页面的元数据)
- [内容摘抄](../theme/writing-a-theme.md#内容摘抄)

**默认主题**

- Responsive layout
- [首页](../theme/default-theme-config.md#首页)
- [内置的搜索](../theme/default-theme-config.md#内置搜索)
- [Algolia 搜索](../theme/default-theme-config.md#algolia-搜索)
- 可定制的 [navbar](../theme/default-theme-config.md#navbar) and [sidebar](../theme/default-theme-config.md#sidebar)
- [自动生成的 GitHub 链接和页面编辑链接](../theme/default-theme-config.md#Git-仓库和编辑链接)
- [PWA: 刷新内容的 Popup](../theme/default-theme-config.md#popup-ui-to-refresh-contents)
- [最后更新时间](../theme/default-theme-config.md#最后更新时间)
- [多语言支持](../guide/i18n.md)

**博客主题**

- [文档](https://vuepress-theme-blog.ulivz.com/)
- [在线案例](https://ulivz.com/)

**Plugin**

- [强大的 Plugin API](../plugin/README.md)
- [博客插件](https://vuepress-plugin-blog.ulivz.com/)
- [PWA 插件](../plugin/official/plugin-pwa.md)
- [Google Analytics 插件](../plugin/official/plugin-google-analytics.md)
- ...

## 为什么不是...?

### Nuxt

VuePress 能做的事情，Nuxt 理论上确实能够胜任，但 Nuxt 是为构建应用程序而生的，而 VuePress 则专注在以内容为中心的静态网站上，同时提供了一些为技术文档定制的开箱即用的特性。

### Docsify / Docute

这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！

### Hexo

Hexo 一直驱动着 Vue 的文档 —— 事实上，在把我们的主站从 Hexo 迁移到 VuePress 之前，我们可能还有很长的路要走。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互，同时，Hexo 的 Markdown 渲染的配置也不是最灵活的。

### GitBook

我们的子项目文档一直都在使用 GitBook。GitBook 最大的问题在于当文件很多时，每次编辑后的重新加载时间长得令人无法忍受。它的默认主题导航结构也比较有限制性，并且，主题系统也不是 Vue 驱动的。GitBook 背后的团队如今也更专注于将其打造为一个商业产品而不是开源工具。
