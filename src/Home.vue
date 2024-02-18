<template>
  <div class="Home">
    <div class="page">
      <Landing />
    </div>
    <div class="page">
      <AboutUs />
    </div>
    <div class="page">
      <OurServices />
    </div>
    <div class="page">
      <CoreTechnology />
    </div>
    <div class="page">
      <MessageMe />
    </div>
    <div class="page">
      <Footer />
    </div>
  </div>
</template>

<script>
import Landing from "./components/screens/Landing.vue";
import AboutUs from "./components/screens/AboutUs.vue";
import CoreTechnology from "./components/screens/CoreTechnology.vue";
import OurServices from "./components/screens/OurServices.vue";
import MessageMe from "./components/screens/MessageMe.vue";
import Footer from "./components/screens/Footer.vue";

export default {
  components: {
    Landing,
    AboutUs,
    OurServices,
    CoreTechnology,
    MessageMe,
    Footer,
  },
};
</script>

<style scoped>
.Home {
  height: 100%;
  width: 100%;
}

.page {
  height: 100%;
  width: 100%;
}
</style>
