<template>
  <ul class="n-submenu">
    <li class="n-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{ transform: `rotateZ(${showChild ? 0 : 180}deg)` }">^</span>
    </li>
    <li is="ul" v-show="showChild" class="n-submenu-child-box">
      <slot></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NSubmenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="scss" scoped>
  .n-submenu {
    background: rgb(33, 35, 39);

    &-title {
      color: #fff;
      position: relative;

      .shrink-icon {
        position: absolute;
        top: 4px;
        right: 10px;
      }
    }

    &-child-box {
      overflow: hidden;
      padding-left: 20px;
    }

    li {
      background: rgb(33, 35, 39);
    }
  }
</style>
