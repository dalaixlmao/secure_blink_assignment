<template>
  <div className="log-in">
    <div className="login-left"></div>
    <div className="login-right">
      <div className="login-heading">Login to Acess Dashbaord</div>
      <div className="login-inputs">
        <div className="Label">Email</div>
        <input type="text" className="inputs" />
      </div>
      <div className="login-inputs">
        <div className="xtra-class">
          <div className="Label">Password</div>
          <div className="forgot-pass">Forgot Password?</div>
        </div>

        <input type="text" className="inputs" />
      </div>
      <div className="button">
        <button class="login-button" @click="$router.push('/dashboard')">Login</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
  goToDashboard() {
    this.$router.push({ name: 'Dashboard' });
  },
},
};
</script>

<style scoped>
.log-in {
  all: unset;
  background-image: url("../../assets/LoginBg.svg");
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.login-left {
  width: 50%;
}
.login-right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50%;
}
.login-heading {
  text-align: left;
  font: normal normal 600 32px/50px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

.xtra-class {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.login-inputs {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.Label {
  text-align: left;
  font: normal normal 600 18px/32px Poppins;
  letter-spacing: 0px;
  opacity: 1;
}
.inputs {
  all: unset;
  height: 73px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  padding-left: 1rem;
  font-size: medium;
}
.forgot-pass {
  text-align: right;
  font: normal normal 18px/32px Poppins;
  letter-spacing: 0px;
  color: #ea1010;
  opacity: 1;
}
.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-button {
  text-align: center;
  font: normal normal normal 25px/31px Poppins;
  letter-spacing: 0px;
  color: #0e77ff;
  opacity: 1;
  height: 72px;
  border: 2px solid #0e77ff;
  border-radius: 36px;
  opacity: 1;
  padding-left: 4rem;
  padding-right: 4rem;
}
</style>
