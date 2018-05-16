<template>
  <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper"> 
        <!-- 这部分放你要渲染的那些内容 --> 
        <swiper-slide v-for="(item,key) in slides" :key="key"><img :src="item" alt=""></swiper-slide> 
        <!-- 这是轮播的小圆点 --> 
        <div class="swiper-pagination" slot="pagination"></div> 
      </swiper>
  </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
    components: {
      swiper, swiperSlide
    },
  data() {
      return {
        swiperOption: {
            debugger: true,   
            notNextTick: true, 
            autoplay: {     //自动播放
                delay: 3000,    
                disableOnInteraction: false 
            },          
            loop: true, //循环播放
            // slidesPerView: "auto",
            centeredSlides: true,   //内容居中
            pagination: {   //底部小圆点
                el: '.swiper-pagination',
                clickable: true     //是否可点击
            }
        }
      }
  },
  props: ['slides'],
 
  computed: {
      swiper() {  
            return this.$refs.mySwiper.swiper;  
        }
  },
  mounted() {
    // console.log(this.swiper);
  }
}
</script>
<style scoped>
.swiper{
    width: 100%;
    
}
img{
    width: 100%;
    border: 0;
}
</style>




