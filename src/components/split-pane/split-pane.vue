<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="paneLeftStyle">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger-con" @mousedown="handleMousedown" :style="paneTrigger"></div>
    <div class="pane pane-right" :style="paneRightStyle">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    value: { // 触发器位置
      type: Number,
      default: 0.5
    },
    triggerWidth: { // 触发器宽度
      type: Number,
      default: 8
    },
    min: { // 距离边界最小距离
      type: Number,
      default: 0.1
    },
    max: { // 距离边界最大距离
      type: Number,
      default: 0.9
    }
  },
  data () {
    return {
      canMove: false,
      initOffset: 0
    }
  },
  computed: {
    paneLeftStyle () {
      return {
        width: `${this.value * 100}%`,
        paddingRight: `${this.triggerWidth / 2}px`
      }
    },
    paneRightStyle () {
      return {
        left: `${this.value * 100}%`,
        paddingLeft: `${this.triggerWidth / 2}px`
      }
    },
    paneTrigger () {
      return {
        left: `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`,
        width: `${this.triggerWidth}px`
      }
    }
  },
  methods: {
    handleMousedown (event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.initOffset = event.pageX - event.target.getBoundingClientRect().left // 点击触发器位置距离触发器左侧边缘的距离
      this.canMove = true
    },
    handleMousemove (event) {
      if (!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect() // 容器距离屏幕左侧的距离
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth / 2 -
        outerRect.left) / outerRect.width // 触发器所在的位置
      if (offsetPercent < this.min) offsetPercent = this.min
      if (offsetPercent > this.max) offsetPercent = this.max
      this.$emit('input', offsetPercent)
    },
    handleMouseup () {
      this.canMove = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .split-pane-wrapper {
    height: 100%;
    width: 100%;
    position: relative;

    .pane {
      position: absolute;
      top: 0;
      height: 100%;

      &-left {
        background: palevioletred;
      }

      &-right {
        right: 0;
        bottom: 0;
        background: paleturquoise;
      }

      &-trigger-con {
        height: 100%;
        background: red;
        position: absolute;
        top: 0;
        z-index: 10;
        user-select: none;
        cursor: col-resize;
      }
    }
  }
</style>
