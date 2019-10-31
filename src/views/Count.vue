<template>
  <div>
    <count-up :endVal="endVal"/>
    <button @click="updateCount">更新数据</button>
  </div>
</template>

<script>
import CountUp from '../components/countUp'

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
