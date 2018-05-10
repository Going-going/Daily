<template>
    <yd-navbar :title="title">
        <div slot="left" v-if="!canBack" @click="goBack">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </div>
    </yd-navbar>
</template>
<script>
export default {
  data() {
      return {
          
      }
  },
  props: ['title', 'canBack'],
  created() {
      
  },
  methods: {
      goBack() {
          this.$router.go(-1);
      }
  },
  watch: {
      '$route': function () { 
          
       }
  }
}
</script>
<style>
.yd-navbar{
    position: fixed;
    top: 0;
    width: 100%;
}
</style>



