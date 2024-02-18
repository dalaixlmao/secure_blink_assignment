<template>
  <div class="landing">
    <div class="nav">
      <div class="nav-left">Logo</div>
      <div class="nav-right">
        <button class="no-bg-buttons">About</button>
        <button class="no-bg-buttons">Service</button>
        <button class="no-bg-buttons">Case Studies</button>
        <button class="no-bg-buttons">Testrimonials</button>
        <button class="no-bg-buttons">Contact</button>
        <button class="login-button" @click="$router.push('/login')">Login</button>

      </div>
    </div>
    <div class="text1">
      Lorem Ipsum is simply dummy text of the printing and typesetting.
    </div>
    <div class="text2">
      Our products are fully custom-made, built with the latest technologies
      and cloud-architectures.
    </div>
    <div class="get-started">
      <button class="get-started-button">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  methods: {
  goToLogin() {
    this.$router.push({ name: 'Login' });
  },
},
};

</script>

<style scoped>
.landing {
  all: unset;
  background-image: url("../../assets/LandingPageBackground.svg");
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: space-around;
}

.nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}

.nav-left {
  text-align: left;
  font: normal normal normal 25px/38px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  width: 30%;
}

.nav-right {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 40%;
}

.text1 {
  padding-left: 10rem;
  height: fit-content;
  width: 50%;
  font: normal normal normal 72px Poppins;
  font-weight: 500;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background-color: transparent;
}

.text2 {
  padding-left: 10rem;
  height: fit-content;
  width: 50%;
  font: normal normal normal 26px Poppins;
  font-weight: 300;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 0.5;
  background-color: transparent;
}

.get-started-button {
  /* UI Properties */
  all: unset;
  height: 72px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 8px;
  padding-left: 2rem;
  padding-right: 2rem;
  width: fit-content;
  overflow: hidden;
  border-radius: 54px;
  text-align: left;
  font: normal normal normal 25px/31px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

.no-bg-buttons {
  all: unset;
  width: fit-content;
  height: 25px;
  /* UI Properties */
  text-align: left;
  font: normal normal normal 18px/27px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background-color: transparent;
}

.login-button {
  width: 159px;
  height: 53px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border: transparent;
  border-radius: 5px;
  opacity: 1;
  text-align: center;
  font: normal normal normal 18px/27px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

.get-started {
  width: 50%;
  padding-left: 10rem;
}
</style>