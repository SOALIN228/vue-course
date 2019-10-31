<template>
  <div>
    <count-up :endVal="endVal"/>
    <button @click="updateCount">更新数据</button>
  </div>
</template>

<script>
import CountUp from '_c/count-up'

export default {
  name: 'Count',
  components: {
    CountUp
  },
  data () {
    return {
      endVal: 2000
    }
  },
  methods: {
    updateCount () {
      this.endVal = 4000
    }
  }
}
</script>

<style scoped>

</style>
