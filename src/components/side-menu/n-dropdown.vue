<template>
  <Dropdown @on-click="handleClick" placement="right-start">
    <span class="drop-menu-span" :style="titleStyle">
      <Icon :type="parent.icon" :color="iconColor" :size="20"/>
      <span v-if="showTitle">{{ parent.title }}</span>
    </span>
    <DropdownMenu slot="list">
      <template v-for="item in parent.children">
        <n-dropdown v-if="item.children" :key="`drop_${item.name}`" :parent="item"></n-dropdown>
        <DropdownItem v-else :key="`drop_${item.name}`" :name="item.name">
          <Icon :type="item.icon" color="#515a6e" :size="20"/>
          {{ item.title }}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: 'NDropdown',
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    iconColor: {
      type: String,
      default: '#515a6e'
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  computed: {
    titleStyle () {
      return {
        textAlign: this.showTitle ? 'left' : 'center',
        paddingLeft: this.showTitle ? '16px' : ''
      }
    }
  },
  methods: {
    handleClick (name) {
      if (!this.showTitle) this.$emit('on-select', name)
    }
  }
}
</script>

<style lang="scss" scoped>
  .drop-menu-span {
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
</style>
