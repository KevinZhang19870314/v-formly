<template>
  <a-layout-sider
    v-model="collapsed"
    :collapsible="collapsible"
    :trigger="null"
    :theme="theme"
  >
    <s-menu
      :collapsed="collapsed"
      :menu="menus"
      :theme="theme"
      :mode="mode"
      @select="onSelect"
      style="padding: 16px 0px"
    ></s-menu>
  </a-layout-sider>
</template>

<script>
import SMenu from "./menu";

export default {
  name: "SideMenu",
  components: { SMenu },
  props: {
    mode: {
      type: String,
      required: false,
      default: "inline",
    },
    theme: {
      type: String,
      required: false,
      default: "light",
    },
    collapsible: {
      type: Boolean,
      required: false,
      default: true,
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false,
    },
    menus: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      title: "V-Formly",
    };
  },
  methods: {
    onSelect(obj) {
      this.$emit("menuSelect", obj);
    },
  },
};
</script>
<style lang="less" scoped></style>
