<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Counter',
  mounted() {
    this.incrementCount()
  },
  methods: {
    ...mapActions(['incrementCount'])
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<template lang="pug">
  div
    p Places I have jumped: {{ count }}
</template>

<style lang="scss" scoped>
p {
  display: inline-block;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
