<template>
<Navbar/>
<ViewingArea>
  <div class="main">
    <div class="bildediv">
      <img src="../assets/profilabilde.png" class="bilde">
    </div>
    <div class="vardsvecums">
      <div class="vards">Ģirts</div>
      <div class="vecums">13<br></div>
    </div>
      <div class="bio">

        seit ir aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaateksts kas ir pirma linija ar kodua ar kodu, si still i, si still ir pirma linija, zini ko? si ir pirma linija<br>
        sad otra<br>
        asdsaodosapdk<br>
        sadkas<br>
        dsa<br>
        dsa<br>
        d<br>
        sad<br>
        asdasdosadpoasjdoisajdio<br>
        asdasdosadpoasjdoisajdio<br>asdasdosadpoasjdoisajdio<br>
        
        asdasdosadpoasjdoisajdio<br>
        
        
      </div>
  </div>
</ViewingArea>


</template>
<script>
import Navbar from '../components/Navbar.vue';
import ViewingArea from '../components/ViewingArea.vue';
export default {
components: {
  Navbar, ViewingArea
}
}
</script>
<style scoped>
.bilde
{
  position: relative;
  display: block;
  padding-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 20rem;
  height: 20rem;
}
.vards
{

  float: left;
  position: relative;
  color: #373737;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600; 
  padding-left: 30rem;

}
.vecums
{
  float: right;
  position: relative;
  color: #373737;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600; 
  padding-right: 30rem; 
}
.vardsvecums::after {
  content: "";
  display: table;
  clear: both;
}
.bio
{
  position: relative;
  padding-left: 30rem;


  color: #373737;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600; 
  padding-right: 30rem;

  max-width: 65rem; 
  text-align: left;
  word-wrap: break-word; 
  
}
</style>