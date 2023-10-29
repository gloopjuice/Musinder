<template>
    <Header/>
    <div class="center">
        <label for="fname" class="registerlaukiname">Enter your email:</label>
        <input type="text" id="fname" name="fname" class="registerlauki"><br><br>
        <label for="lname" class="registerlaukiname">Choose password:</label>
        <input type="text" id="lname" name="lname" class="registerlauki"><br><br>
        <input type="submit" class="pagepoga" value="Register">
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
.registerlauki
{
    display: flex;
    width: 300px;
    align-items: center;
    border-radius: 20px;
    border: 2px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    align-items: center; 
    justify-content: center; 
    height: 2vh; 
    padding-left: 0;
    
}
.registerlaukiname
{
    color: #ffffff;
}
.center
{
    padding-left: 50vh;
}
.pagepoga
{
    padding: auto;
    margin-left: 110vh;
}
</style>
