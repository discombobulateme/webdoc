<script>
export default {
  name: 'UserCard',
  props: ['user'],
  data() {
    return {
      defaultBio: 'Oi, eu sou parte da história do BASE jump brasileiro. Quer saber mais sobre a minha história?'
    }
  }
}
</script>

<template lang="pug">
.box
  h1 {{ user.name }} ({{ user.gender }})
  p Bio: {{ user.bio || defaultBio }}
</template>

<style lang="scss" scoped>
.box {
  padding: 2rem;
  background: white;
  color: black;
  border-radius: 0.3rem;
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
