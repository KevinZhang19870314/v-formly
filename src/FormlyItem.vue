<template>
  <div ref="container"></div>
</template>
<script>
import Vue from "vue";
import VObject from "@/components/Object.vue";
export default {
  name: "v-formly-item",
  props: {
    type: {
      type: String,
      default: "",
    },
    meta: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    if (!this.type)
      throw new Error(
        "Form item type must be one of these: number, string, boolean, array, object"
      );

    let ComponentClass = null;
    let instance = null;
    switch (this.type) {
      case "object":
        ComponentClass = Vue.extend(VObject);
        instance = new ComponentClass({
          propsData: {
            meta: this.meta,
          },
        });
        instance.$mount();
        break;

      default:
        break;
    }

    this.$refs.container.appendChild(instance.$el);
  },
};
</script>
<style lang=""></style>
