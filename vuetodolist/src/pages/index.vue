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
            <h2>热门图书</h2>
            <ul>
              <li v-for="(item, key) in bookList" :key="key">
                <img :src="item.bookCover" alt="">
                <div>
                  <p v-html="item.bookName"></p>
                  <p>￥{{item.bookPrice}}元</p>
                </div>
              </li>
            </ul>
        </div>
        <com-loading :show="flag"></com-loading>
    </div>
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import { getSlides, getBooklist } from '../api/index'
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
            bookList: [],
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
            let slide = await getSlides();
            let booklist = await getBooklist();
              this.slides = slide.data;
              this.bookList = booklist.data;
              this.flag = false;
        } catch(err) {
            console.log(err);
        }
    }
    start();
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
h2{
  text-align: center;
  line-height:30px;
  border-bottom:1px solid #e4e4e4;
}
ul{
  text-align: left;
  font-size: 0;
}
li{
  width: 50%;
  height: auto;
  font-size: 12px;
  display: inline-block;
  padding: 8px;
  border-bottom:1px solid #e4e4e4;
}
li:nth-of-type(2n-1){
  border-right:1px solid #e4e4e4;
}
li img{
  width: 100%;
  height:150px;
}
li p{
  line-height: 22px;
  padding-left:10px;
}
li p:last-child{
  /*color: red;*/
}
</style>
