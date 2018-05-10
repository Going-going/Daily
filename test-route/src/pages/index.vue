<template>
    <div class="container">
        <com-header title="首页" canBack="true"></com-header>
        <div class="content">
            <com-swiper></com-swiper>
            
        </div> 
        <com-loading :show="flag"></com-loading>
    </div>
</template>
<script>
import '../api/index'
export default {
  data() {
    return {
      flag: true
    }
  },
  components: {
    //   Header
  },
  methods: {
  	
  },
  mounted() {
    setTimeout(() => { 
      this.flag = false;
    }, 2000)
  }
}
</script>
<style>

</style>