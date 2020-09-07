<template>
  <div class="athlete">
    <h1>{{ athlete.name }} @{{ athlete.email }}</h1>
    <ul id="jumps">
      <Jump v-for="jump in athlete.jumps" :key="jump._id" :jump="jump" />
    </ul>
  </div>
</template>

<script>
import Jump from './jump'

export default {
  name: 'Athlete',
  props: ['athlete'],
  components: {
    Jump
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
