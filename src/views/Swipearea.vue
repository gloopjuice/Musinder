<template>
  <div>
    <Navbar />
    <ViewingArea>
      <div class="content-container">

        <div class="left-column">

          <div class="teksts">

            <div class="username">
              Madara
            </div>

            <div class="vecums">
              31
            </div>

            <div class="userBIO">
              BIO:
              Man patīk pastaigāties pa parkiem.
              Esmu gatava pilnīgi jebkam dzīvē.
              Pārsteidz mani
            </div>

            <div class="yesnobuttons">
              <!-- Add your buttons here -->
            </div>

          </div>

        </div>

        <div class="right-column">

          <div class="userImage">
            <img src="../assets/raitis.png" class="bilde">
          </div>

        </div>

      </div>

    </ViewingArea>
  </div>
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
.teksts
{
  position: relative;

}
.username
{
  width: 14.75rem;
  height: 6.375rem;
  flex-shrink: 0; 
  color: #373737;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

}
.vecums
{
  width: 22.75rem;
  height: 6.375rem;
  flex-shrink: 0; 
  color: #373737;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

}
.userBIO
{
  width: 31.75rem;
  height: 17.5625rem;
  flex-shrink: 0;
  color: #426B1F;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;

}
.userImage {


  position: relative;

}
.bilde
{
  width: 23.938rem;
  height: 46.5rem;
}
.content-container {
  display: flex;
  align-items: flex-start;
  
}

.left-column {
  flex: 1;
}

.right-column {
  flex: 0;
  

}
</style>