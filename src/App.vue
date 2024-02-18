<template>
  <div class="app">
    <Home />
  </div>
</template>

<script>
import Home from './Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style>
.app {
  margin: 0;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}
</style>