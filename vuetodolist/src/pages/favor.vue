<template>
    <div class="container">
        <com-header title="列表"></com-header>
        <div class="content">
            <ul>
                <li v-for="(item, key) in items" :key="key">
                    <img :src="item.bookCover" alt="">
                    <div>
                      <p v-html="item.bookName"></p>
                      <p>￥{{item.bookPrice}}元</p>
                    </div>
                </li>
            </ul>
            <com-loading :show="flag"></com-loading>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
export default {
  data() {
      return {
          items: [],
          flag: true
      }
  },
  created() {
    axios.get('http://127.0.0.1:9000/booklist').then((data) => {
      console.log(data);
      if(data.status == 200){
        this.items = data.data;
        setTimeout(() => {
          this.flag = false;
        },3000)

      }
      // console.log(JSON.parse(data.data));
    })
    var sleep = function (time) {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve()
			}, time);
		})
	};

	var start = async function () {
		// 在这里使用起来就像同步代码那样直观
		console.log('start');
		await sleep(3000);
		console.log('end');
	};

	start();
  }
}
</script>

<style scoped>
.content ul{
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
    line-height: 22px;
    padding-left:10px;
  }
li p:last-child{
  /*color: red;*/
}
</style>
