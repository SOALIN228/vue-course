<template>
  <div class="menu-box">
    <NMenu>
      <template v-for="(item, index) in list">
        <n-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{ item.title }}</n-menu-item>
        <n-re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></n-re-submenu>
      </template>
    </NMenu>
  </div>
</template>

<script>
import { NMenu, NMenuItem, NReSubmenu } from '_c/menu'

export default {
  name: 'MenuPage',
  components: {
    NMenu,
    NMenuItem,
    NReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '1111'
        },
        {
          title: '2222'
        },
        {
          title: '3333',
          children: [
            {
              title: '3333-1'
            },
            {
              title: '3333-2',
              children: [
                {
                  title: '3333-2-1'
                },
                {
                  title: '3333-2-2'
                },
                {
                  title: '3333-2-3',
                  children: [
                    {
                      title: '3333-2-3-1'
                    },
                    {
                      title: '3333-2-3-2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-box {
    width: 300px;
    height: 400px;
  }
</style>
