<template>
  <Submenu :name="parent.name">
    <template slot="title">
      <Icon :type="parent.icon"/>
      {{parent.title}}
    </template>
    <template v-for="item in parent.children">
      <n-submenu v-if="item.children"
                 :name="item.name"
                 :parent="item"
                 :key="`menu_${item.name}`"
      ></n-submenu>
      <MenuItem v-else
                :name="item.name"
                :key="`menu_${item.name}`"
      >
        <Icon :type="item.icon"/>
        {{item.title}}
      </MenuItem>
    </template>
  </Submenu>
</template>

<script>
export default {
  name: 'NSubmenu',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
