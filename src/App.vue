<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition-group name="fade" mode="out-in">
      <router-view key="default"/>
      <router-view name="tel" key="tel"/>
      <router-view name="email" key="email"/>
    </transition-group>
  </div>
</template>

<script>
export default {
  watch: {
    '$route' (to, from) {
      // 可以根据params 或query 获取到要展示的动效名
    }
  }
}
</script>

<style lang="scss">
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-leave,
  .fade-enter-to {
    opacity: 1;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
