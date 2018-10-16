<template>
    <footer class="footer">
        <div :class="currtab == 0 ? 'active' : ''" @click="addClass">
            <router-link to="/">
                <i class="iconfont icon-fonts-shouye"></i>
                <p>首页</p>
            </router-link>
        </div>
        <div :class="currtab == 1 ? 'active' : ''" @click="addClass(1)">
            <router-link to="/favor">
                <i class="iconfont icon-shoucang"></i>
                <p>收藏</p>
            </router-link>
        </div>
        <div :class="currtab == 2 ? 'active' : ''" @click="addClass(2)">
            <router-link to="/list">
            <i class="iconfont icon-icon--"></i>
            <p>列表</p>
            </router-link>
        </div>
        <div :class="currtab == 3 ? 'active' : ''" @click="addClass(3)">
            <router-link to="/add">
                <i class="iconfont icon-jiahao"></i>
                <p>添加</p>
            </router-link>
        </div>
    </footer>
</template>

<script>
    export default {
        data(){
            return {
                currtab: 0
            }
        },
        created() {
            var type = this.$route.name
            switch(type) {
                case 'favor': 
                    this.currtab = 1;
                    break;
                case 'list':
                    this.currtab = 2;
                    break;
                case 'add':
                    this.currtab = 2;
                    break;
                default: 
                    this.currtab = 0;
                    break;
            }
        },
        methods: {
            addClass(t) {
                if(t > 0){
                    this.currtab = t;
                }else{
                    this.currtab = 0;
                }
            }
        }
    }
</script>
<style scoped>
a{
    color: #333;
}
.footer{
    display: flex;
    justify-content: space-around;
    line-height: .45rem;
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: .2rem;
    padding-top: .1rem;
    z-index: 10;
}
.active a{
    color: orange;
}
.footer .iconfont{
    font-size: .5rem;
}
</style>
