<template>
    <Header/>
    <div class="center">
        <label for="fname" class = "loginlaukiname">Enter email:</label>
        <input type="text" id="fname" name="fname" class="loginlauki"><br><br>
        <label for="lname" class = "loginlaukiname">Enter password:</label>
        <input type="text" id="lname" name="lname" class="loginlauki"><br><br>
        <form action="/apphomepage">
            <input type="submit" value="Log in!" class="pagepoga">
        </form>

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
.loginlauki
{
    display: flex;
    width: 1112px;
    align-items: center;
    border-radius: 20px;
    border: 2px solid rgba(0, 0, 0, 0.06);
    background: #FFF;
    align-items: center; 
    justify-content: center; 
    height: 2vh; 
    padding-left: 0;
}
.loginlaukiname
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
