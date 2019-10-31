<template>
  <ul class="n-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'NMenu',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .n-menu {
    & * {
      list-style: none;
    }

    ul {
      padding: 0;
      margin: 0;
    }
  }
</style>
