<template>
    <div class="container">
          <div class="scrollable-box">
            <slot>
              
            </slot>
          </div>
        </div>
    </template>
    
    <script>
    export default {
    name: 'ViewingArea'
    }
    </script>
    
    <style sourced>
      .container {
        display: flex;
        justify-content: center;
        padding-top: 5vh;
        height: 100vh; 
      }
      
      .scrollable-box {
  
        width: 90%; 
        max-height: 80vh; 
        overflow-y: scroll;
        color: black;
        border-radius: 3px;
        border: 2px solid #E6E6E6;
        background: white;
      }
    </style>