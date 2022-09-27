<template>
  <a-layout class="app-layout">
    <!-- SideMenu -->
    <side-menu :menus="menus" :collapsed="collapsed"></side-menu>

    <a-layout>
      <!-- layout header -->
      <a-layout-header class="layout-header">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <!-- layout content -->
      <a-layout-content class="layout-content">
        <transition name="fade-transform" mode="out-in">
          <router-view :key="key" />
        </transition>
      </a-layout-content>
      <!-- layout footer -->
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from "./components/Menu/SideMenu.vue";
import { routes } from "../router/index";
import { deepClone } from "../utils/index";
export default {
  name: "Layout",
  components: { SideMenu },
  data() {
    return {
      collapsed: false,
      menus: [],
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  created() {
    const newRoutes = this.convertRoutes(
      routes.find((item) => item.path === "/")
    );
    this.menus = (newRoutes && newRoutes.children) || [];
  },
  methods: {
    convertRoutes(nodes) {
      if (!nodes) return null;

      nodes = deepClone(nodes);

      let queue = Array.isArray(nodes) ? nodes.concat() : [nodes];

      while (queue.length) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
          const node = queue.shift();

          if (!node.children || !node.children.length) continue;

          node.children.forEach((child) => {
            // 转化相对路径
            if (child.path[0] !== "/" && !child.path.startsWith("http")) {
              child.path = node.path.replace(/(\w*)[/]*$/, `$1/${child.path}`);
            }
          });

          queue = queue.concat(node.children);
        }
      }

      return nodes;
    },
  },
};
</script>

<style lang="less" scoped>
.app-layout {
  min-height: 100vh;

  .trigger {
    font-size: 18px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }

  .layout-header {
    background: #fff;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .layout-content {
    position: relative;
    height: 100%;
    margin: 24px 24px 0;
  }
}
</style>
