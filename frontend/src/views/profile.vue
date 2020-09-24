<script>
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'profile',
  components: { Counter },
  data() {
    return {
      users: [],
      time: new Date(),
      bio: ''
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
    h1 Webdoc {{ user.name }}
    p The time is: {{ time }}
    h2 Users
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
</template>
