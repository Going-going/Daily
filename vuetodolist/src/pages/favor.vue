<template>
    <div class="container">
        <com-header title="收藏"></com-header>
        <div class="content">
            <input type="text" placeholder="收藏" />
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
		    }, 2000)
		},
		watch: {
	      '$route': function() {
	          // setTimeout(function() {
	          //   document.getElementById('loading').style.display = 'none';
	          // },3000)
	      }
	  }
	}
</script>
<style>

</style>