<template>
     <div className="dashboard">
    <div className="nav-side"><SideNav /></div>
      
      <div className="non-nav">
        <div className="header-D">
          <div className="header-part">
            <div className="dashboard-header">Dashbaord</div>
            <div className="welcomeMessage">Welcome Back, Andrew</div>
          </div>
          <div className="first-right">
            <div className="add-button">
              <button className="actual-add-button">Add Unit</button>
            </div>
            <div>
              <div className="avatar-detail">
                <div className="avatar"></div>
                <div className="avatar-name">Andrew Johnstones</div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-part">
          <div className="second-part-columns">
            <div className="second-part-heading">BALANCE</div>
            <div className="second-part-content">$5900.00</div>
          </div>
          <div className="divider"></div>
          <div className="second-part-columns">
            <div className="second-part-heading">PROFITS</div>
            <div className="second-part-content">$950.00</div>
          </div>
          <div className="divider"></div>
          <div className="second-part-columns">
            <div className="second-part-heading">LOSSES</div>
            <div className="second-part-content">$450.00</div>
          </div>
          <div className="divider"></div>
          <div className="second-part-columns">
            <div className="second-part-heading">CURRENCIES</div>
            <div className="second-part-content-currencies">
              <div className="currency">
                <img src="../../assets/currency-dollar.svg "/>
              </div>
              <div className="currency">
                <img src="../../assets/currency-euro.svg" />
              </div>
              <div className="currency">
                <img src="../../assets/currency-yen.svg" />
              </div>
              <div className="currency">
                <img src="../../assets/bitcoin-2.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="third-part">
          <div className="third-part-box">
            <div className="third-part-column">
              <div className="country-name">Itally</div>
              <div className="change-in-stocks">
                <div className="country-change">471</div>
                <div className="change-icon">
                  <img src="../../assets/up.svg" />
                </div>
              </div>
              <div className="graph">
                <img src="../../assets/v6.svg" />
              </div>
            </div>

            <div className="third-part-column">
              <div className="country-name">United States</div>
              <div className="change-in-stocks">
                <div className="country-change">475</div>
                <div className="change-icon">
                  <img src="../../assets/down.svg" />
                </div>
              </div>
              <div className="graph">
                <img src="../../assets/v1.svg" />
              </div>
            </div>

            <div className="third-part-column">
              <div className="country-name">Canada</div>
              <div className="change-in-stocks">
                <div className="country-change">431</div>
                <div className="change-icon">
                  <img src="../../assets/down.svg" />
                </div>
              </div>
              <div className="graph">
                <img src=../../assets/v2.svg />
              </div>
            </div>

            <div className="third-part-column">
              <div className="country-name">Spain</div>
              <div className="change-in-stocks">
                <div className="country-change">174</div>
                <div className="change-icon">
                  <img src="../../assets/up.svg" />
                </div>
              </div>
              <div className="graph">
                <img src=../../assets/v3.svg />
              </div>
            </div>

            <div className="third-part-column">
              <div className="country-name">Japan</div>
              <div className="change-in-stocks">
                <div className="country-change">475</div>
                <div className="change-icon">
                  <img src="../../assets/down.svg" />
                </div>
              </div>
              <div className="graph">
                <img src=../../assets/v4.svg />
              </div>
            </div>

            <div className="third-part-column">
              <div className="country-name">South Africa</div>
              <div className="change-in-stocks">
                <div className="country-change">134</div>
                <div className="change-icon">
                  <img src="../../assets/up.svg" />
                </div>
              </div>
              <div className="graph">
                <img src=../../assets/v5.svg />
              </div>
            </div>
          </div>
        </div>
        <div className="fourth-part">
          <div className="fourth-left">
            <div className="heading-fourth">
              <div className="heading-name">Team Members</div>
              <div className="view-all">View All</div>
            </div>
            <div className="member-list">
              <div className="member">
                <div className="member-details">
                  <div className="fourth-avatar"></div>
                  <div className="member-name">Andrew John</div>
                </div>
                <div className="member-grade">Top Trader</div>
              </div>
              <div className="member">
                <div className="member-details">
                  <div className="fourth-avatar"></div>
                  <div className="member-name">Andrew John</div>
                </div>
                <div className="member-grade">Top Trader</div>
              </div>
              <div className="member">
                <div className="member-details">
                  <div className="fourth-avatar"></div>
                  <div className="member-name">Andrew John</div>
                </div>
                <div className="member-grade">Top Trader</div>
              </div>
              <div className="member">
                <div className="member-details">
                  <div className="fourth-avatar"></div>
                  <div className="member-name">Andrew John</div>
                </div>
                <div className="member-grade">Top Trader</div>
              </div>
            </div>
          </div>

          <div className="fourth-right">
            <div className="heading-fourth">
              <div className="heading-name">Comparision</div>
              <div className="view-all">View All</div>
            </div>
            <div className="country-list">
              <div className="country">
                <div className="country-top">
                  <div className="country-flag">
                    <img src="../../assets/usa.svg" />
                  </div>
                  <div className="country-name-2">United States</div>
                </div>
                <div className="country-bottom">
                  <div className="country-bar-1"></div>
                  <div className="country-bar-number">93%</div>
                </div>
              </div>
              <div className="country">
                <div className="country-top">
                  <div className="country-flag">
                    <img src="../../assets/italy.svg" />
                  </div>
                  <div className="country-name-2">Italy</div>
                </div>

                <div className="country-bottom">
                  <div className="country-bar-2"></div>
                  <div className="country-bar-number">73%</div>
                </div>
              </div>
              <div className="country">
                <div className="country-top">
                  <div className="country-flag">
                    <img src="../../assets/spain.svg" />
                  </div>
                  <div className="country-name-2">Spain</div>
                </div>

                <div className="country-bottom">
                  <div className="country-bar-3"></div>
                  <div className="country-bar-number">13%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SideNav from '../SideNav.vue';
  export default {
  name: 'Dashboard',
  components: {
    SideNav,

  },
  };
  </script>
  
  <style scoped>
  .dashboard {
  all: unset;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  width: 100%;
  height: 100%;
}

.nav-side{
  width: 20%;
}

.first-right{
  display: flex;
  flex-direction: row;
  width: 35%;
  justify-content: space-around;
  align-items: center;
}

.non-nav {
  width: 80%;
  height: 100%;
  padding: 3rem;
}

.header-D {
  display: flex;
  flex-direction: row;
  height: 20%;
  align-items: center;
  justify-content: space-between;
}

.header-part {
  width: 65%;
  display: flex;
  flex-direction: column;
}

.dashboard-header {
  text-align: left;
  font: normal normal 51px/61px Poppins;
  letter-spacing: 0px;
  color: #11193c;
  opacity: 1;
}
.welcomeMessage {
  text-align: left;
  font: normal normal normal 20px/24px Poppins;
  letter-spacing: 0px;
  color: #8990ad;
  opacity: 1;
}
.add-button {
}
.actual-add-button {
  height: 58px;
  /* UI Properties */
  background: #0f77fa 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 26px #0000001c;
  border-radius: 5px;
  opacity: 1;
  border: transparent;
  text-align: left;
  font: normal normal 20px/24px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  padding-left: 2rem;
  padding-right: 2rem;
}

.actual-add-button:hover {
  cursor: pointer;
}

.avatar-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.avatar {
  height: 68px;
  width: 68px;
  border-radius: 50%;
  background-color: grey;
}

.avatar-name {
  margin-left: 1rem;
  text-align: left;
  font: normal normal normal 20px/24px Poppins;
  letter-spacing: 0px;
  color: #8990ad;
  opacity: 1;
}

.second-part {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 10%;
  margin-top: 3rem;
}
.second-part-columns {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 15%;
}
.second-part-heading {
  text-align: left;
  font: normal normal normal 19px/23px Poppins;
  letter-spacing: 2.91px;
  color: #8990ad;
  opacity: 1;
}
.second-part-content {
  text-align: left;
  font: normal normal 37px/44px Poppins;
  letter-spacing: 0px;
  color: #11193c;
  opacity: 1;
}
.divider {
  height: 91px;
  /* UI Properties */
  border: 1px solid #c5c9d7;
  opacity: 1;
}
.second-part-content-currencies {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.currency {
  height: 33px;
  width: 33px;
  background: rgba(36, 100, 252, 0.1);
  background-repeat: no-repeat;
  background-origin: padding-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.third-part {
  margin-top: 6rem;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.third-part-box {
  width: 100%;
  height: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 26px #00000017;
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.third-part-column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.country-name {
  text-align: left;
  font: normal normal normal 19px/23px Poppins;
  letter-spacing: 0px;
  color: #495172;
  text-shadow: 0px 3px 26px #0000001c;
  opacity: 1;
}
.change-in-stocks {
  text-align: left;
  font: normal normal 35px/23px Poppins;
  letter-spacing: 0px;
  color: #495172;
  text-shadow: 0px 3px 26px #0000001c;
  opacity: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.country-change {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.change-icon {
  margin-left: 1rem;
}
.graph {
  margin-top: 2rem;
}

.fourth-part {
  margin-top: 6rem;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
.fourth-left {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-right: 2rem;
}
.heading-fourth {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.heading-name {
  text-align: left;
  font: normal normal 30px/36px Poppins;
  letter-spacing: 0px;
  color: #11193c;
  opacity: 1;
}
.view-all {
  text-align: left;
  font: normal normal bold 15px/18px Poppins;
  letter-spacing: 0px;
  color: #2464fc;
  opacity: 1;
}
.member-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.member {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 26px #00000017;
  border-radius: 4px;
  opacity: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
}
.fourth-avatar {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background-color: grey;
}
.member-name {
  text-align: left;
  font: normal normal normal 20px/24px Poppins;
  letter-spacing: 0px;
  color: #0b2257;
  opacity: 1;
}
.member-details {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
  align-items: center;
}
.member-grade {
  text-align: left;
  font: normal normal normal 15px/18px Poppins;
  padding: 1rem;
  letter-spacing: 0px;
  color: #0f77fa;
  opacity: 1;

  background: rgba(36, 100, 252, 0.1);
  background-repeat: no-repeat;
  background-origin: padding-box;
  border-radius: 100px;
}
.fourth-right {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-left: 2rem;
}
.country-list {
  padding: 2rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 26px #00000017;
  border-radius: 4px;
  opacity: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.country {
  display: flex;
  flex-direction: column;
}

.country-top {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.country-bottom {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.country-flag {
}
.country-name-2 {
  text-align: left;
  font: normal normal 16px/19px Poppins;
  letter-spacing: 0px;
  color: #495172;
  text-shadow: 0px 3px 26px #0000001c;
  opacity: 1;
  margin-left: 1rem;
}
.country-bar-1 {
  height: 7px;
  width:93%;
  background: #0f77fa 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
}
.country-bar-number {
  text-align: left;
font: normal normal 16px/19px Poppins;
letter-spacing: 0px;
color: #495172;
text-shadow: 0px 3px 26px #0000001C;
opacity: 1;
margin-left: 1rem;
}
.country-bar-2 {
  height: 7px;
  width:73%;
  background: #0f77fa 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
}
.country-bar-3 {
  height: 7px;
  width:13%;
  background: #0f77fa 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
}

  
  </style>