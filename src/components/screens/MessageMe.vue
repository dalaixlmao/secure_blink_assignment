<template>
  <div class="message-me">
    <div class="MessageMe-left"></div>
    <div class="MessageMe-right">
      <div class="MessageBox">
        <div class="messageBoxTitle">Send Us Message</div>
        <div class="TextInput">
          <input type="text" placeholder="Your Email" class="TextInputHere"/>
        </div>
        <div class="TextInput">
          <input type="text" placeholder="Your Name" class="TextInputHere"/>
        </div>
        <div class="TextInput">
          <input type="text" placeholder="Your Phone Number" class="TextInputHere"/>
        </div>
        <div class="TextInput">
          <input type="text" placeholder="Subject" class="TextInputHere"/>
        </div>
        <div class="TextInput">
          <div class="YourMessage">Your Message</div>
          <input type="text" class="TextInputHere"/>
        </div>
        <div class="Agreement">
          <input type="checkbox" class="CheckBox"/>
          <div class="AgreementText">
            By sending this message, you confirm that you have read and agreed
            to our privacy-policy.
          </div>
        </div>
        <div class="StartButton"><button class="GSButton">Get Started</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageMe',
}
</script>

<style scoped>
.message-me {
  all: unset;
  background-image: url("../../assets/MessageMe.svg");
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  margin-top: 20rem;
}

.MessageMe-left {
  width: 50%;
}

.MessageMe-right {
  width: 50%;
  height: 100%;
}
.messageBoxTitle {
  text-align: left;
  font: normal normal 600 36px/50px Poppins;
  letter-spacing: 0px;
  color: #292929;
  opacity: 1;
  margin-bottom: 2rem;
}
.TextInput {
  text-align: left;
  font: normal normal normal 20px/24px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
.TextInputHere {
  width: 100%;
  text-align: left;
  font: normal normal normal 20px/24px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  border-color: transparent;
  border-bottom: 2px solid black;
  margin-bottom: 3rem;
}

.CheckBox {
  width: 29px;
  height: 28px;
  /* UI Properties */
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  opacity: 1;
}

.MessageBox {
  margin-top: 20rem;
  margin-bottom: 5rem;
  padding: 3rem 5rem 3rem 5rem;
  width: 70%;
  height: fit-content;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 40px 60px #0e77ff26;
  opacity: 1;
}

.Agreement {
  display: flex;
  flex-direction: row;
}
.GSButton {
  height: 72px;
  /* UI Properties */
  background: #0e77ff 0% 0% no-repeat padding-box;
  border-radius: 35px;
  opacity: 1;
  border: transparent;
  text-align: left;
  font: normal normal normal 25px/31px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  padding: 0 3rem 0 3rem;
}

.AgreementText {
  margin-left: 0.5rem;
  text-align: left;
  font: normal normal normal 14px/18px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 1rem;
}

.YourMessage {
  text-align: left;
  font: normal normal normal 20px/24px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

</style>
