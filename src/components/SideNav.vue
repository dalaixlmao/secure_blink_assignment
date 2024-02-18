<template>
    <div class="side-nav">
      <div class="nav-top">
        <div class="Dashbaord-icon" @click="handleClick('Dashboard')">
          <img src="../assets/metrics.svg" />
          <div class="active-icon">Dashboard</div>
        </div>
        <div class="Analytics-icon" @click="handleClick('Analytics')">
          <img src="../assets/analytics.svg" />
          <div class="inactive-icon">Analytics</div>
        </div>
        <div class="Trading-icon" @click="handleClick('Trading')">
          <img src="../assets/currency-exchange-2.svg" />
          <div class="inactive-icon">Trading</div>
        </div>
        <div class="Notif-icon" @click="handleClick('Notifications')">
          <img src="../assets/sound-wave.svg" />
          <div class="inactive-icon">Notifications</div>
        </div>
      </div>
  
      <div class="nav-bottom">
        <div class="Logout-icon" @click="handleClick('Logout')">
          <img src="../assets/logout.svg" />
          <div class="inactive-icon">Logout</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleClick(tab) {
        console.log(`Clicked on ${tab}`);
        // Here you can add logic to handle navigation or any other action
      },
    },
  };
  </script>
  
  <style scoped>
  .side-nav {
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 26px #00000017;
    opacity: 1;
    position: absolute;
    top: 0;
    left: 0;
  }
  .nav-top {
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .Dashbaord-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 26px #0000001c;
    border-radius: 5px;
    opacity: 1;
    padding: 1rem;
  }
  .Analytics-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Trading-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Notif-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-bottom {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .Logout-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .active-icon {
    margin-top: 1rem;
    text-align: left;
    font: normal normal normal 20px/24px Poppins;
    letter-spacing: 0px;
    color: #495172;
    opacity: 1;
  }
  .inactive-icon {
    margin-top: 1rem;
    text-align: left;
    font: normal normal normal 20px/24px Poppins;
    letter-spacing: 0px;
    color: #8990ad;
    opacity: 1;
  }
  </style>
  