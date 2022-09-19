<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 'horizontal','vertical','inline' -->
    <v-formly :schema="schema" :layout="'vertical'"></v-formly>
  </div>
</template>

<script>
import VFormly from "@/Formly.vue";

export default {
  name: "App",
  data: () => {
    return {
      // schema: {
      //   type: "object",
      //   properties: {
      //     name: {
      //       type: "string",
      //     },
      //     password: {
      //       type: "string",
      //       ui: {
      //         type: "password",
      //       },
      //     },
      //   },
      //   required: ["name", "password"],
      // },
      schema: {
        type: "object",
        properties: {
          name: {
            title: "姓名",
            type: "string",
          },
          desc: {
            title: "描述",
            type: "string",
          },
          obj: {
            type: "object",
            properties: {
              name1: {
                title: "姓名1",
                type: "string",
              },
              obj1: {
                type: "object",
                properties: {
                  name2: {
                    title: "姓名2",
                    type: "string",
                  },
                },
                required: ["name2"],
              },
            },
            required: ["name1"],
          },
        },
        // required: ["name", "desc"],
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
  padding: 0 600px;
}
</style>
