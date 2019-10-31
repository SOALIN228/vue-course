<template>
  <li class="n-menu-item">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'NMenuItem',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .n-menu-item {
    background: rgb(90, 92, 104);
    color: #fff;
  }
</style>
