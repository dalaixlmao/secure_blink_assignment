<template>
  <div className="about-us">
      <div className="about-us-left"></div>
      <div className="about-us-right">
        <div className="about-us-items">
          <div className="about-us-title">About Us</div>
          <div className="Great-Digital-Name">Great Digital Agency</div>
          <div className="about-us-text1">
            Our products are fully custom-made, built with the latest
            technologies and cloud-architectures.
          </div>
          <div className="about-us-text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
            odio, turpis accumsan congue. Quisque blandit dui Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. In convallis porta mauris non aliquam.
          </div>
          <buttton className="about-us-get-started">Get Started</buttton>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
.about-us {
  all: unset;
  background-image: url("../../assets/AboutUs.svg");
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
}
.about-us-left {
  width: 60%;
  height: 100%;
}

.about-us-right {
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-us-items {
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
}

.about-us-title {
  text-align: left;
  font: normal normal 600 25px/50px Poppins;
  letter-spacing: 0px;
  color: #0e77ff;
  opacity: 1;
}

.Great-Digital-Name {
  text-align: left;
  font: normal normal 600 40px/50px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 2rem;
}

.about-us-text1 {
  text-align: left;
  font: normal normal normal 22px/32px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 1rem;
}

.about-us-text2 {
  text-align: left;
  font: normal normal 300 18px/32px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 2rem;
}
.about-us-get-started {
  width: 239px;

  display: flex;
  justify-content: center;
  align-items: center;
  font: normal normal normal 22px/32px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  height: 72px;
  /* UI Properties */
  border: 2px solid #0e77ff;
  border-radius: 35px;
  opacity: 1;
  color: #0e77ff;
}

</style>