<template>
  <n-submenu>
    <ul slot="title">{{ parent.title }}</ul>
    <template v-for="(item, i) in parent.children">
      <n-menu-item v-if="!item.children" :key="`menu_item_${index}_${i}`">{{ item.title }}</n-menu-item>
      <n-re-submenu v-else :key="`menu_item_${index}_${i}`" :parent="item"></n-re-submenu>
    </template>
  </n-submenu>
</template>

<script>
import NMenuItem from './n-menu-item'
import NSubmenu from './n-submenu'

export default {
  name: 'NReSubmenu',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: Number
  },
  components: {
    NMenuItem,
    NSubmenu
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
