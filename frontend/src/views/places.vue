<script>
import Counter from '@/components/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'placess',
  components: { Counter },
  data() {
    return {
      places: [],
      time: new Date()
    }
  },
  async created() {
    this.places = await this.fetchPlaces()
  },
  methods: {
    ...mapActions(['fetchPlaces'])
  },
  computed: {
    ...mapState(['place'])
  }
}
</script>

<template lang="pug">
  .home
    h1 Aqui pode navegar pelas histórias dos lugares já saltados...
    div(v-for="user in users")
      router-link(:to="`/users/${user._id}`") {{ user.name }}
</template>

<style lang="scss" scoped>
.home {
  display: block;
  margin: 1rem 0;
  background-color: #ffd701;
  color: #681c81;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  font-weight: bold;
  color: #681c81;

  &.router-link-exact-active {
    color: #ffa33d;
  }
}
</style>
