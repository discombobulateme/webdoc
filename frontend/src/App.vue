<template lang="pug">
  #app
    h1 Escrevendo a historia do BASE jump brasileiro
    #nav
      router-link(to="/") Start |&nbsp;
      router-link(to="/about") About |&nbsp;
      router-link(to="/athletes") BASE Jumpers |&nbsp;
      router-link(to="/places") Exit Points
    router-view
</template>

<style lang="scss">
#app {
  background: rgb(131, 58, 180);
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

h2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
  background-color: #2e1a81;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #ffa33d;
    }
  }
}
</style>
