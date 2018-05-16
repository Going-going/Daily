<template>
    <div class="container">
        <com-header title="添加"></com-header>
        <div class="content">
          <form action="">
            <div>
              <label for="">书名</label>
              <input type="text" placeholder="请输入书名">
            </div>
            <div>
              <label for="">价格</label>
              <input type="text" placeholder="请输入价格">
            </div>
            <div>
              <label for="">作者</label>
              <input type="text" placeholder="请输入作者">
            </div>
            <div>
              <label for="">简介</label>
              <input type="text" placeholder="请输简介">
            </div>
            <div>
              <input type="submit" />
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
  		flag: true
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


