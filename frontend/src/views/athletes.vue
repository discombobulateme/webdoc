<script>
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'athletes',
  components: { Counter },
  data() {
    return {
      users: [],
      time: new Date()
    }
  },
  async created() {
    this.users = await this.fetchUsers()
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Aqui pode navegar pelas histórias de...
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
</template>

<style lang="scss" scoped>
.home {
  display: block;
  margin: 1rem 0;
  background: rgb(34, 193, 195);
  background: linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
}
a {
  font-weight: bold;
  color: #681c81;

  &.router-link-exact-active {
    color: #fd2e24;
  }
}
</style>
