<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/news">新闻</router-link>
    <router-link to="/games">游戏</router-link>
    <router-link to="/filter">过滤器</router-link>
    <router-link to="/handleBetaData">元数据处理</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
