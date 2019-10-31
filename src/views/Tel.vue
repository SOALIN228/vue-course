<template>
  <div class="tel">
    tel: <span>{{value}}</span>
  </div>
</template>

<script>
export default {
  name: 'Tel',
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.$bus.$on('on-input', (inputValue) => {
      this.value = inputValue
    })
  }
}
</script>

<style scoped>

</style>
