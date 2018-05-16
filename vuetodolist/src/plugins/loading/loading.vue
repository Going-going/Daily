<template>
  <div id="loading" v-if="show">
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  </div>
</template>
<script>
export default {
  mounted() {
      
  },
  props: ['show'],
  watch: {
      '$route': function() {
          setTimeout(() => {
            this.show = false;
          },3000)
          
      }
  }
}
</script>

<style>
#loading{
    position: fixed;
    width: 100%;
    height: 84%;
    top: 1rem;
    left: 0;
    background: rgba(255,255,255,.3);
    animation: loading 3s;
    /*display: none;*/
    z-index: 1;
}
#loading ul{
    display: flex;
    justify-content: space-between;
    width: 1.5rem;
    height: 1rem;
    /* background: red; */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 0;
}
#loading ul li{
    width: 0.2rem;
    height: 0.2rem;
    background: yellow;
    font-size: .2rem;
    align-self: center;
}
#loading ul li:nth-of-type(1){
    background: yellow;
    
    animation: loadingOne 1.5s infinite;
}
#loading ul li:nth-of-type(2){
    background: rgb(39, 158, 39);
    animation: loadingOne 1.5s 0.5s infinite ;
}
#loading ul li:nth-of-type(3){
    background: rgb(233, 105, 54);
    animation: loadingOne 1.5s 1s infinite;
}
#loading ul li:nth-of-type(4){
    background: rgb(98, 214, 31);
    animation: loadingOne 1.5s 1.5s infinite;
}
#loading ul li:nth-of-type(5){
    background: rgb(233, 233, 78);
    animation: loadingOne 1.5s 2s infinite;
}
@keyframes loadingOne {
    0%{
        background:  yellow;
        transform: rotate(0deg);
    }
    50%{
        background: rgb(233, 105, 54);
    }
    100% {
        background: rgb(98, 214, 31);
        transform: rotate(180deg);
    }
}
</style>

