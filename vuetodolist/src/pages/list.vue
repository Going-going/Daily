<template>
    <div class="container">
        <com-header title="列表"></com-header>
        <div class="content" >
            <ul>
                <li v-for="(item, key) in items" :key="key">
                    <img :src="item.bookCover" alt="">
                    <div>
                      <p v-html="item.bookName"></p>
                      <p class="price">￥{{item.bookPrice}}元</p>
                    </div>
                </li>
            </ul>
            <com-loading :show="flag"></com-loading>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import {getBooks} from '../api/index'
export default {
  data() {
      return {
          items: [],
          flag: true
      }
  },
  methods: {
    getData() {
      var params = {
        currpage: 2,
        pagesize: 10
      }
      console.log(params);
      var start = async () => {
        try{
          let books = await getBooks(params);
          this.items = books.data.data;
          this.flag = false;
        }catch(err) {
          console.log(err)
        }
      }
      start();
    },
    handleScroll () {
      var scrollTop = document.getElementsByClassName('content')[0].scrollTop;
      var clientHeight = document.body.clientHeight;
      var height = document.getElementsByClassName('content')[0].offsetHeight;
      console.log(scrollTop,height, clientHeight)
      // if(){

      // }
    },
  },
  created() {
    this.getData()
  },
  mounted () {
    console.log(document.body.clientHeight);
    console.log(document.body.scrollTop )
    window.addEventListener('scroll', this.handleScroll, true)
  },
  watch: {
    '$route': function () { 
        this.getData()
     }

  }
}
</script>

<style scoped>
.content ul{
  width: 100%;
  height: auto;
    font-size: 0;
    text-align: left;
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
    width:70%;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 22px;
    padding-left:10px;
  }
li p:last-child{
  /*color: red;*/
}
</style>
