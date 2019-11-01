<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" width="auto" theme="dark">
      <template v-for="item in list">
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
    </Menu>
    <div v-show="collapsed" class="drop-wrapper">
      <template v-for="item in list">
        <n-dropdown @on-select="handleSelect" v-if="item.children" :show-title="false" icon-color="#fff"
                    :key="`drop_${item.name}`" :parent="item"></n-dropdown>
        <Tooltip v-else transfer :content="item.title" placement="right" :key="`drop_${item.name}`">
          <span @click="handleClick(item.name)" class="drop-menu-span">
            <Icon :type="item.icon" color="#fff" :size="20"/>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import NSubmenu from './n-submenu'
import NDropdown from './n-dropdown'

export default {
  name: 'NSideMenu',
  components: {
    NSubmenu,
    NDropdown
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {
    handleSelect (name) {
      console.log(name)
    },
    handleClick (name) {
      console.log(name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .side-menu-wrapper {
    width: 100%;

    .ivu-tooltip {
      display: block;
      width: 100%;
      text-align: center;
      padding: 5px 0;
    }

    .drop-wrapper > .ivu-dropdown {
      display: block;
      padding: 5px;
      margin: 0 auto;
    }
  }
</style>
