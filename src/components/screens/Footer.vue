<template>
  <div class="Footer">
    <div class="col1">
      <div class="FooterText">
        Lorem Finaldream rure dolor in reprehenderit in voluptate velit esse
        cillum dolore e uis nostrud exercitation isi ut aliquip ex ea commodo
        consequat.
      </div>
      <div class="social-icons">
        <img src="../../assets/Facebook.svg" alt="Facebook" />
        <img src="../../assets/Twitter.svg" alt="Twitter" />
        <img src="../../assets/Instagram.svg" alt="Instagram" />
      </div>
    </div>
    <div class="col2">
      <div class="column-title">Our Services</div>
      <div class="column-item">Web Develpment</div>
      <div class="column-item">Moblie Development</div>
      <div class="column-item">UI/UX Designing</div>
      <div class="column-item">Cloud Technologies</div>
    </div>
    <div class="col3">
      <div class="column-title">Out Links</div>
      <div class="column-item">Terms and Condition</div>
      <div class="column-item">Privacy Policy</div>
      <div class="column-item">Imprint</div>
      <div class="column-item">Legal</div>
    </div>
    <div class="col4">
      <div class="column-title">Contact Us</div>
      <div class="column-item">
        Al. Dummyodl 124/23 floor 123 Banswara Street, 02-577 India.
      </div>
      <div class="column-item">00 1800 245 453</div>
      <div class="column-item">hello@inkyy.com</div>
    </div>
  </div>
</template>
<script>
export default { name: "Footer" };
</script>
<style scoped>
.Footer {
  all: unset;
  background-color: #0e77ff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  margin-top: 10rem;
  padding-bottom: 10rem;
  padding-top: 7rem;
}
.FooterText {
  width: 60%;
  text-align: left;
  font: normal normal 300 16px/30px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 1rem;
}
.col1 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 40%;
}
.social-icons {
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.col2 {
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.column-title {
  text-align: left;
  font: normal normal 600 20px/81px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.column-item {
  text-align: left;
  font: normal normal 300 16px/40px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.col3 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15%;
}
.col4 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15%;
}
</style>
