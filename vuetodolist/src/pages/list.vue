<template>
    <div class="container">
        <com-header title="列表"></com-header>
        <div class="content" @scroll="handleScroll">
            <ul class="datalist">
                <li v-for="(item, key) in items" :key="key">
                    <img v-lazy="item.bookCover" alt="">
                    <div>
                      <p v-html="item.bookName"></p>
                      <p class="price">￥{{item.bookPrice}}元</p>
                    </div>
                </li>
                <div class="loading">
                  正在加载...
                </div>
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
          flag: true,
          // params: {
          //   currpage: 1,
          //   pagesize: 10
          // },
          params: {
            offset: 0,
            // currpage: 1,
            pagesize: 10
          },
          totalpage: 0,
          locked: false
      }
  },
  methods: {
    getData() {
      var start = async () => {
        try{
          let books = await getBooks(this.params);
          this.totalpage = books.data.totalpage;
          books.data.data.forEach((item, index) => {
            this.items.push(item);
          });
          this.flag = false;
          this.locked = false;
          document.getElementsByClassName('loading')[0].style.display = 'none';
        }catch(err) {
          console.log(err)
        }
      }
      setTimeout(function () { 
        start();
      }, 2000)
      
    },
    handleScroll () {
      var headH = document.getElementsByTagName('header')[0].offsetHeight + 2;
      var footH = document.getElementsByTagName('footer')[0].offsetHeight;
      var scrollTop = document.getElementsByClassName('content')[0].scrollTop;
      var clientHeight = document.body.clientHeight;
      var height = document.getElementsByClassName('datalist')[0].offsetHeight;
      if(!this.locked){
        if((scrollTop + clientHeight-headH-footH) >= height){
          console.log(this.currpage)
          this.locked = !this.locked;
          if(this.params.currpage < this.totalpage){
            document.getElementsByClassName('loading')[0].style.display = 'block';
              this.params.currpage++;
              this.getData();
          }else{
            document.getElementsByClassName('loading')[0].style.display = 'block';
            document.getElementsByClassName('loading')[0].innerHTML = '--END--';
            return false;
          }
        }
      }
    }
  },
  created() {
    this.getData()
  },
  mounted () {

  },
  destroyed () {
    this.handleScroll;
  },
  watch: {
    '$route': function () { 
        this.getData()
     }

  }
}
</script>

<style scoped>
.content{
position: relative;
}
.content ul{
  width: 100%;
  height: auto;
    font-size: 0;
    text-align: left;
    position: relative;
    /* padding-bottom: 40px; */
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
.loading{
  text-align: center;
  width: 100%;
  height: 40px;
  /* position: absolute;
  bottom: 0;
  left: 0; */
  line-height: 40px;
  font-size: 13px;
  display: none;
}
</style>
