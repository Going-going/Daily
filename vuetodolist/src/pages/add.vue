<template>
    <div class="container">
        <com-header title="添加"></com-header>
        <div class="content">
          <form action="http://127.0.0.1:9000/booklist" method="post" name="myform" @submit="check()">
            <div>
              <label for="bookName">书名</label>
              <input type="text" name="bookName" placeholder="请输入书名">
            </div>
            <div>
              <label for="bookPrice">价格</label>
              <input type="text" name="bookPrice" placeholder="请输入价格">
            </div>
            <div>
              <label for="bookInfo">简介</label>
              <input type="text" name="bookInfo" placeholder="请输入作者">
            </div>
            <div>
              <label for="bookCover">封面</label>
              <input type="text" name="bookCover" placeholder="请输简介">
            </div>
            <div> 
              <input type="submit" value="添加" />
            </div>
          </form> 
			  <com-loading :show="flag"></com-loading>
      </div>
    </div>
</template>
<script>
export default {
  data() {
  	return {
  		flag: false
  	}
  },
  methods: {
    check() {
      var form = document.getElementsByName('myform')[0];
      console.log(form.bookName);
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
    }
  },
  mounted() {
  	setTimeout(() => {
        this.flag = false;
    },3000)
  },
  destroyed() {
  	this.flag = true;
  }
}
</script>
<style scoped="scoped">
  form{
    padding-top: 45px;
  }
form div{
  width:100%;
  height:44px;
}
  form div input{
    width:70%;
    height:30px;
    border:1px solid #e4e4e4;
    padding:0 10px;
  }
  input[type=submit]{
    margin-top:30px;
  }
</style>


