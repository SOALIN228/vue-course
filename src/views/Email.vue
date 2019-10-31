<template>
  <div class="email">
    email: <input type="text" :value="emailValue" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'Email',
  data () {
    return {
      emailValue: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$bus.$emit('on-input', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
