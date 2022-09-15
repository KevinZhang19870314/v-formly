<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <v-formly :schema="schema"></v-formly>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";

export default {
  name: "App",
  data: () => {
    return {
      schema: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          password: {
            type: "string",
            ui: {
              type: "password",
            },
          },
        },
        required: ["name", "password"],
      },
    };
  },
  components: {
    VFormly,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
