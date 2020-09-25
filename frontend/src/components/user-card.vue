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
  border: 1px solid #333;
  background: #dd0;
  border-radius: 0.3rem;
}
</style>
