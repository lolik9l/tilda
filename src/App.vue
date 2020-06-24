<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "materialize-css";
body {
  background-color: #f0f0f0;
}

@media only screen and (min-width: 993px) {
  .container {
    width: 80%;
  }
}
i {
  color: #fa886e;
}

i.small {
  font-size: 1.5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
