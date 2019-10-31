<template>
  <span :id="eleId"></span>
</template>

<script>
import { CountUp } from 'countup.js'

export default {
  name: 'CountUp',
  props: {
    endVal: { // 最终值
      type: Number,
      required: true
    },
    startVal: { // 起始值
      type: Number,
      default: 0
    },
    decimalPlaces: { // 小数保留位数
      type: Number,
      default: 0
    },
    duration: { // 动画持续时长
      type: Number,
      default: 2
    },
    useEasing: { // 动画是否变速
      type: Boolean,
      default: true
    },
    separator: { // 整数分割符
      type: String,
      default: ','
    },
    decimal: { // 小数分割符
      type: String,
      default: '.'
    },
    delay: { // 动画延迟
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      count: null
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}` // 每个组件唯一的id
    }
  },
  watch: {
    endVal (newValue, oldValue) { // 数据变化时更新
      this.count.update(newValue)
    }
  },
  mounted () {
    this.count = new CountUp(this.eleId, this.endVal, { // 实例化
      startVal: this.startVal,
      decimalPlaces: this.decimalPlaces,
      duration: this.duration,
      useEasing: this.useEasing,
      separator: this.separator,
      decimal: this.decimal
    })

    setTimeout(() => { // 设置动画延时
      this.count.start()
    }, this.delay)
  }
}
</script>

<style scoped>

</style>
