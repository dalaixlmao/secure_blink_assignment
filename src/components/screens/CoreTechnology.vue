<template>
  <div class="core-technology">
    <div class="Core-Technology-Title">Core Technologies</div>
    <div class="Core-Technology-Description">
      Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Aliq uam ex odio, is the turpis accu msan congue euisque blandit dui Pelle ntesque habitant.
    </div>
    <div class="Fields">
      <div class="FieldsName" @click="changeField('design')">Design</div>
      <div class="FieldsName" @click="changeField('development')">Development</div>
      <div class="FieldsName" @click="changeField('marketing')">Marketing</div>
    </div>
    <div class="Techstacks">
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/AmazonWebServices.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/FireBase.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/GoogleCloud.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/JavaScript.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/NodeJs.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/React.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/Redux.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/Sf.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/FireBase.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/GoogleCloud.svg"></div>
      <div class="TechStackItems"><img src="../../assets/TechStackLogos/JavaScript.svg"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeField(field) {
      console.log('Field changed to:', field);
      // Add your logic here to handle field changes
    },
  },
};
</script>

<style scoped>
.core-technology {
  all: unset;
  background-image: url("../../assets/CoreTechnologiesBackground.svg");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
}

.Core-Technology-Title {
    margin-top: 30rem;
  text-align: left;
  font: normal normal 600 40px/50px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 1rem;
}
.Core-Technology-Description {
    width: 50%;
  text-align: center;
  font: normal normal 300 18px/32px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 2rem;
}
.Fields {
  height: 81px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 40px 60px #0e77ff26;
  border-radius: 72px;
  opacity: 1;
  display: flex;
  flex-direction: row;
  padding: 0 3rem 0 3rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
}
.FieldsName {
  text-align: left;
  font: normal normal normal 20px/50px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  padding: 2rem;
}

.FieldsName:hover{
    text-align: left;
    font: normal normal normal 20px/50px Poppins;
    letter-spacing: 0px;
    color: #0e77ff;
    opacity: 1;
    padding: 2rem;
    cursor: pointer;
}

.Techstacks {
    display: flex;
    flex-direction: row;
    width: 70%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 16rem;
}

.TechStackItems {
  width: 140px;
  height: 140px;
  /* UI Properties */
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #0e77ff;
  border-radius: 9px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
}

</style>
