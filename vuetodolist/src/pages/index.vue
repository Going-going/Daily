<template>
    <div class="container">
        <com-header title="首页" canBack="true"></com-header>
        <div class="content">
            <swiper :options="swiperOption" ref="mySwiper"> 
                <!-- 这部分放你要渲染的那些内容 --> 
                <swiper-slide v-for="(item,key) in slides" :key="key"><img :src="item.src" alt=""></swiper-slide> 
                <!-- 这是轮播的小圆点 --> 
                <div class="swiper-pagination" slot="pagination"></div> 
            </swiper>
        </div> 
        <com-loading :show="flag"></com-loading>
    </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import { getSlides } from '../api/index'
import axios from 'axios'
import 'babel-polyfill'
export default {
    components: {
      swiper, swiperSlide
    },
    data() {
        return {
            flag: true,
            slides: [],
            swiperOption: {
                notNextTick: true, 
                autoplay: {     //自动播放
                    delay: 3000
                },          
                // loop: true, //循环播放  //切换路由
                // slidesPerView: "auto",  // 页面不使用 报classList undefined
                centeredSlides: true,   //内容居中
                pagination: {   
                    el: '.swiper-pagination',
                    clickable: true     //是否可点击
                },
                onSlideChangeEnd: swiper => {  
                    //这个位置放swiper的回调方法  
                    this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;  
                }
            }
        }
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper;
        }
    },
  methods: {
  	
  },
  mounted() {
    this.swiper.slideTo(0, 0, false);  
    // axios.get('http://127.0.0.1:9000/slide').then((res) => {
    //     this.slides = res.data;
    //     this.flag = false;
    // }).catch((err) => {
    //     console.log(err);
    // })

    var start = async () => {
        try {
            let result = await getSlides();
            if(result.status == 200){
                this.slides = result.data;
                this.flag = false;
            }else{
                console.log(result.error);
            }
        } catch(err) {
            console.log(err);
        }
    }
    start();
  }
}
</script>
<style>
.swiper{
    width: 100%;
    
}
img{
    width: 100%;
    border: 0;
}
</style>