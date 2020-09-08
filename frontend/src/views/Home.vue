<template>
  <div class="home">
    <img alt="image showing the major jumping places in Brazil" src="../assets/home.png" />
    <Athlete v-for="athlete in athletes" :key="athlete._id" :athlete="athlete" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import Athlete from '@/components/athlete.vue'

export default {
  name: 'Home',
  components: {
    Athlete
  },
  data() {
    return {
      athletes: []
    }
  },
  async created() {
    const athletesRequest = await axios.get('/api/athletes')
    this.athletes = athletesRequest.data
  }
}
</script>
