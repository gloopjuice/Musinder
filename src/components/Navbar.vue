<template>
    <div class="navbar">
        <router-link to="/page1" class="button">Register</router-link>
        <router-link to="/page2" class="button">Register</router-link>
        <router-link to="/page3" class="button">Register</router-link>
        <router-link to="/page4" class="button">Register</router-link>
    </div>
    <div class="Logo">
        <router-link to="/">aaaaaa</router-link>
    </div>
</template>

<style scoped>
.navbar {
    position: fixed;
    bottom: 20px; 
    left: 50%; 
    transform: translateX(-50%); 
    display: flex;
    gap: 10px;
}

.button {
    background-color: #40c4ac;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 20px;
}

</style>
