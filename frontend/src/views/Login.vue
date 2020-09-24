<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      backendError: null
    }
  },
  methods: {
    ...mapActions(['login']),
    async submitLogin(event) {
      event.preventDefault()
      try {
        await this.login({
          email: this.email,
          password: this.password
        })
        this.$router.push('/profile')
      } catch (error) {
        this.backendError = error.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
  section
    form(@submit='submitLogin')
      h1 Log into your account
      label(for='email') Email:
      input(id='email' type='email' v-model='email' required)
      br
      label(for='password') Password:
      input(id='password' type='password' v-model='password' required)
      br
      button(type='submit') Login
    p(v-if='backendError') {{ backendError }}
    p Don't have an account yet?
      router-link(to='/register') Register
</template>

<style lang="scss" scoped>
label {
  display: block;
  margin: 1rem 0;
}
button {
  background: linear-gradient(to bottom, #ff8808 5%, #eafa05 100%);
  background-color: #ff8808;
  border-radius: 28px;
  border: 1px solid #eafa05;
  display: inline-block;
  cursor: pointer;
  color: #0091ff;
  font-family: Arial;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;

  &:hover {
    background: linear-gradient(to bottom, #eafa05 5%, #ff8808 100%);
    background-color: #eafa05;
  }
  &:active {
    position: relative;
    top: 1px;
  }
}
</style>
