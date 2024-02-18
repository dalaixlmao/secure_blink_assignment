<template>
  <div class="our-services">
    <div class="OurServices-left">
      <div class="OurServices-title">Our Services</div>
      <div class="TransformingIdeas">Transforming your ideas into Reality</div>
      <div class="ThirdPart">
        <div class="ThirdPartItem">Web Development</div>
        <div class="ThirdPartItem">Mobile Development</div>
        <div class="ThirdPartItem">UI/UX Designing</div>
        <div class="ThirdPartItem">Branding</div>
        <div class="ThirdPartItem">Cloud Technology</div>
      </div>
    </div>
    <div class="OurService-Right">
      <div class="blue-box"></div>
      <div class="OurServiceBox">
        <div class="topLayer">
          <div class="LeftTitleIcon">
            <img src="../../assets/UIUX.svg" />
            <div class="Skills">UI/UX Designing</div>
          </div>
          <div class="Skill-decription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
            odio, vestibulum ac turpis ac, accumsan consequat mauris.
            Pellentesque habitant.
          </div>
          <div class="skill-list">
            <div class="skill-item">
              <img src="../../assets/Tick.svg" />
              <div class="list-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="skill-item">
              <img src="../../assets/Tick.svg" />
              <div class="list-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="skill-item">
              <img src="../../assets/Tick.svg" />
              <div class="list-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div class="skill-item">
              <img src="../../assets/Tick.svg" />
              <div class="list-item">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurServices",
  // You can include script logic here if needed
};
</script>

<style scoped>
.our-services {
  all: unset;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  align-items: center;
  background: #fafcff 0% 0% no-repeat padding-box;
}

.OurServices-left {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  padding-left: 10rem;
  justify-content: center;
}
.OurServices-title {
  text-align: left;
  font: normal normal 600 25px/50px Poppins;
  letter-spacing: 0px;
  color: #0e77ff;
  opacity: 1;
}
.TransformingIdeas {
  text-align: left;
  font: normal normal 600 40px/50px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 2rem;
}

.ThirdPart {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.ThirdPartItem {
  width: fit-content;
  padding: 1rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #16b2ff17 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  text-align: center;
  font: normal normal 600 20px/50px Poppins;
  letter-spacing: 0px;
  color: #0e77ff;
  opacity: 1;
  margin-top: 1rem;
  margin-right: 1rem;
}

.ThirdPartItem:hover {
  width: fit-content;
  padding: 1rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0e77ff 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  text-align: center;
  font: normal normal 600 20px/50px Poppins;
  letter-spacing: 0px;
  color: white;
  opacity: 1;
  margin-top: 1rem;
  margin-right: 1rem;
}

.OurService-Right {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.LeftTitleIcon {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
}
.Skills {
  margin-left: 1rem;
  text-align: left;
  font: normal normal 600 44px/110px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
.Skill-decription {
  text-align: left;
  font: normal normal normal 16px/30px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 2rem;
}
.skill-list {
  display: flex;
  flex-direction: column;
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  align-items: flex-start;
}

.skill-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
}
.list-item {
  margin-left: 1rem;
}

.OurServiceBox {
  padding: 1rem 2rem 2rem 2rem;
  height: fit-content;
  width: 50%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 30px 60px #0e77ff26;
  opacity: 1;
}

.topLayer {
  z-index: 2000;
}
</style>
