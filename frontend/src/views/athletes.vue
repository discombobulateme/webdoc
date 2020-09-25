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
