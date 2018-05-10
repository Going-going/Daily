<template>
    <div class="container">
        <com-header title="添加"></com-header>
        <div class="content">
        	我是添加
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
<style>

</style>


