<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- 'horizontal','vertical','inline' -->
    <h1>horizontal</h1>
    <v-formly ref="form" :schema="schema" :layout="'horizontal'"></v-formly>
    <a-button type="primary" @click="setNameValue"> 设置姓名 </a-button>
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
            title: "姓名",
            type: "string",
          },
          desc: {
            title: "描述",
            type: "string",
            ui: {
              change: (val) => {
                console.log('val = ', val);
              }
            }
          },
          obj: {
            type: "object",
            properties: {
              name1: {
                title: "姓名1",
                type: "string",
                description: "属性目的性解释",
                ui: {
                  showRequired: true,
                  placeholder: "请输入姓名",
                  optional: "(选填)",
                  optionalHelp: {
                    icon: "question-circle",
                    text: "选填帮助",
                  },
                },
              },
              obj1: {
                type: "object",
                properties: {
                  name2: {
                    title: "姓名2",
                    type: "string",
                    ui: {
                      showRequired: true,
                    },
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
  methods: {
    setNameValue() {
      const nameContext = this.$refs.form.getContext('/obj/name1');
      console.log(nameContext.value);
      nameContext.value = 'kevin';
    }
  }
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
  padding: 0 500px;
}
</style>
