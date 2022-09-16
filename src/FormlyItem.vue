<template>
  <div ref="container">
    <component v-bind:is="currentComponent" :id="id" :depth="depth" :meta="meta"></component>
  </div>
</template>
<script>
export default {
  name: "v-formly-item",
  props: {
    id: String,
    depth: Number,
    meta: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    currentComponent: function () {
      return `v-${this.meta.type}`;
    },
  },
  mounted() {
    if (!this.meta.type)
      throw new Error(
        "Form item type must be one of these: number, string, boolean, array, object"
      );
  },
};
</script>
<style lang=""></style>
