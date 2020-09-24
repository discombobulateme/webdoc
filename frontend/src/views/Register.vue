<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      backendError: null
    }
  },
  methods: {
    ...mapActions(['register']),
    async submitRegister(event) {
      event.preventDefault()
      try {
        await this.register({
          name: this.name,
          email: this.email,
          password: this.password
        })
        this.$router.push('/login')
      } catch (error) {
        this.backendError = error.response.data.message
      }
    }
  }
}
</script>

<template lang="pug">
  section
    form(@submit='submitRegister')
      h1 Create a new athlete account
      label(for='name') Name:&nbsp;
        input(id='name' type='text' v-model='name' required)
      label(for='gender') Gender:&nbsp;
        input(id='gender' type='text' v-model='gender' required)
      label(for='instructor') Instructor(s):&nbsp;
        input(id='instructor' type='text' v-model='instructor' required)
      label(for='email') Email:&nbsp;
        input(id='email' type='email' v-model='email' required)
      label(for='password') Password:&nbsp;
        input(id='password' type='password' v-model='password' required)
      button(type='submit') Create account
    p {{ backendError }}
    p Already have an account?
    router-link(to='/login') Login
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
