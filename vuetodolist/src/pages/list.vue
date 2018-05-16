<template>
    <div class="container">
        <com-header title="列表"></com-header>
        <div class="content">
            <ul>
                <!-- <li v-for="(item, key) in arr" :key="key"><img v-lazy="item" /></li> -->
                <li>
                    <img src="../assets/logo.png" alt="">
                </li>
                <li>
                    <img src="../assets/logo.png" alt="">
                </li>
                <li>
                    <img src="../assets/logo.png" alt="">
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
          arr: [],
          flag: true
      }
  },
  created() {
    axios.get('http://127.0.0.1:9000/slide').then((data) => {
      console.log(data);
      if(data.status == 200){
        this.arr = data.data;
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
    height: 200px;
    background: red;
    font-size: 12px;
    display: inline-block;
    padding: 8px;   
}
li img{
    width: 180px;
    height:150px;
}
</style>
