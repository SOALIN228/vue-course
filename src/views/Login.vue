<template>
  <div>
    <input type="text" v-model="userName"/>
    <input type="password" v-model="password"/>
    <button @click="handleSubmit">登录</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleSubmit () {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(res => {
        console.log('登录成功')
        this.$router.push({
          name: 'home'
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
