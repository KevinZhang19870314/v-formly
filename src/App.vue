<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/string">String</router-link> |
      <router-link to="/boolean">Boolean</router-link> |
      <router-link to="/object">Object</router-link> |
      <router-link to="/array">Array</router-link> |
      <router-link to="/autoComplete">AutoComplete</router-link> |
      <router-link to="/checkbox">Checkbox</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #40a9ff;
    }
  }
}
</style>
