<template>
  <div>
    <split-pane class="split-pane-con" v-model="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/split-pane'

export default {
  name: 'Split',
  components: {
    SplitPane
  },
  data () {
    return {
      offset: 0.8
    }
  }
}
</script>

<style scoped>
  .split-pane-con{
    width: 400px;
    height: 200px;
    background: papayawhip;
  }
</style>
