<template>
    <div id="app" style="background: #373737;">
        <Header/>
        <div class="teksts">
            <h1>
                roflhelikoteris<br>
                so, te ir like teksts<br>
                
            </h1>
        </div>
        <img src="../assets/ambatabus.png" class="bilde">
    </div>
</template>



<script>
import Header from '../components/Header.vue';

export default{
   components:{
       Header
   }
}

</script>


<style scoped>
.teksts
{
    color: #ffffff;
    margin-left: 45vw;
}
.bilde
{
    position: absolute;
    margin-left: 65vh;
}
</style>
    