<template>
  <div class="swiper">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(item, index) in slides" :key="index"><img :src="item"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  data() {
      return {
        slides: [  
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180050&di=0d2ee92eead284e8133d6df07535d75a&imgtype=0&src=http%3A%2F%2Fimg.sc115.com%2Fuploads1%2Fsc%2Fjpgs%2F1512%2Fapic16988_sc115.com.jpg',  
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=7412fd486c47c15f1d27485be0d7bd28&imgtype=0&src=http%3A%2F%2Fwww.duoxinqi.com%2Fimages%2F2012%2F06%2F20120605_8.jpg',  
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511015180167&di=3bcedd33a30129b9951be2a81f9b505c&imgtype=0&src=http%3A%2F%2Fpic1.5442.com%2F2015%2F0420%2F06%2F05.jpg'  
        ],
        swiperOption: {
            debugger: true,    
            // autoplay: {     //自动播放
            //     delay: 1000,    
            //     disableOnInteraction: false 
            // },          
            loop: true, //循环播放
            slidesPerView: "auto",
            centeredSlides: true,   //内容居中
            pagination: {   //底部小圆点
                el: '.swiper-pagination',
                clickable: true     //是否可点击
            }
        },
      }
  },
  components: {
      swiper, swiperSlide
  },
  mounted() {
    //   this.swiper.slideTo(0, 0, false); 
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




