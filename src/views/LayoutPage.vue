<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider :width="300" collapsible breakpoint="sm" v-model="collapsed">
        <n-side-menu :collapsed="collapsed" :list="menuList"></n-side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses" @click.native="handleCollapsed" type="md-menu" :size="32"/>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view/>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import NSideMenu from '_c/side-menu'

export default {
  name: 'LayoutPage',
  components: {
    NSideMenu
  },
  data () {
    return {
      collapsed: false,
      menuList: [
        {
          title: '1',
          name: 'menu1',
          icon: 'ios-alarm'
        },
        {
          title: '2',
          name: 'menu2',
          icon: 'ios-alarm'
        },
        {
          title: '3',
          name: 'menu3',
          icon: 'ios-alarm',
          children: [
            {
              title: '3-1',
              name: 'menu11',
              icon: 'ios-alarm'
            },
            {
              title: '3-2',
              name: 'menu12',
              icon: 'ios-alarm',
              children: [
                {
                  title: '3-2-1',
                  name: 'menu121',
                  icon: 'ios-alarm'
                },
                {
                  title: '3-2-2',
                  name: 'menu122',
                  icon: 'ios-alarm'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-wrapper, .layout-outer {
    height: 100%;

    .header-wrapper {
      background: #fff;
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
      padding: 0 23px;

      .trigger-icon {
        cursor: pointer;
        transition: transform .3s ease;

        &.rotate {
          transform: rotateZ(-90deg);
          transition: transform .3s ease;
        }
      }
    }

    .content-con {
      padding: 10px;
    }

    .page-card {
      min-height: calc(100vh - 84px);
    }
  }
</style>
