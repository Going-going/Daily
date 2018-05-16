<template>
  <div id="app">
    <transition enter-active-class="animated slideInRight" leave-active-class="animated fadeOut">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <com-footer></com-footer>

  </div>
</template>

<script>
export default {
  // watch: {
  //     '$route': function() {
  //         document.getElementById('loading').style.display = 'block';
  //         setTimeout(function() {
  //           document.getElementById('loading').style.display = 'none';
  //         },3000)
  //     }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fff;
  display: flex;
  flex-direction: column;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  /* margin: 0 10px; */
}

a {
  color: #42b983;
}
.container{
  flex: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.content{
    width: 100%;
    height: 84%;
    overflow: auto;
    position: fixed;
    top: 1rem;
    background: rgb(255, 255, 255);
    text-align: center;
    /*padding-bottom: 2rem;*/
}
img{
  width: 100%;
}
</style>
