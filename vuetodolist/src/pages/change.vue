<template>
    <div class="container">
        <com-header title="修改"></com-header>
        <div class="content">
            <div>
              <label for="bookName">书名</label>
              <input type="text" name="bookName" v-model="curItem.bookName">
            </div>
            <div>
              <label for="bookPrice">价格</label>
              <input type="text" name="bookPrice" v-model="curItem.bookPrice">
            </div>
            <div>
              <label for="bookInfo">简介</label>
              <input type="text" name="bookInfo" v-model="curItem.bookInfo">
            </div>
            <div>
              <label for="bookCover">封面</label>
              <input type="text" name="bookCover" v-model="curItem.bookCover">
            </div>
            <div>
              <input type="button" id="submit" @click="submit()" value='确认修改' />
            </div>
			  <com-loading :show="flag"></com-loading>
      </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import {changeBook, getBook} from '../api/index'
export default {
  data() {
  	return {
  		flag: false,
      curItem: {}
  	}
  },
  methods: {
    check() {
      var form = document.getElementsByName('myform')[0];
      if(!form.bookName.value){
        alert('请输入书名');
        form.bookName.focus();
        return false;
      }
      if(!form.bookPrice.value){
        alert('请输入价格');
        form.bookPrice.focus();
        return false;
      }
      if(!form.bookInfo.value){
        form.bookInfo = '这是一本书';
      }
      if(!form.bookCover.value){
        form.bookCover = '../../static/logo.png';
      }
     return true;
    },
    getData(id) {
      let getItem = async () => {
        let item = await getBook(id)
        // console.log(item.data);
        this.curItem = item.data[0]
      }
      getItem()
    },
    submit(){
      console.log(this.curItem)
      let send = async () => {
        try {
          let item = await changeBook(this.curItem)
          console.log(item)
          this.$router.go(-1);
        }catch(e) {
          console.log(e)
        }
      }
      send()
      // axios.put('http://127.0.0.1:9000/booklist', {
      //   data: this.curItem
      // },{
      //   headers: {
      //         'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // }).then((res) => {
      //   console.log(res);
      // }).catch((err) => {
      //   console.log(err)
      // })
    }
  },
  created() {

    var id = this.$route.query.id,
        $this = this;
    this.getData(id)

  },
  mounted() {

  	setTimeout(() => {
        this.flag = false;
    },3000)
  },
  destroyed() {
  	this.flag = true;
  },
  watch: {
      '$route': function () {
        var id = this.$route.query.id,
          $this = this;
        // this.getData(id)
      }
  }
}
</script>
<style scoped="scoped">
  .content{
    padding-top: 45px;
  }
  .content div{
  width:100%;
  height:44px;
}
  .content div input{
    width:70%;
    height:30px;
    border:1px solid #e4e4e4;
    padding:0 10px;
  }
  #submit{
    margin-top:30px;
  }
</style>


