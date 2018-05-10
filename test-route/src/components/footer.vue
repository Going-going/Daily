<template>
    <footer class="footer">
        <div>
            <router-link to="/">
                <i class="iconfont icon-fonts-shouye"></i>
                <p>首页</p>
            </router-link>
        </div>
        <div>
            <router-link to="/favor">
                <i class="iconfont icon-shoucang"></i>
                <p>收藏</p>
            </router-link>
        </div>
        <div>
            <router-link to="/list">
            <i class="iconfont icon-icon--"></i>
            <p>列表</p>
            </router-link>
        </div>
        <div>
            <router-link to="/add">
                <i class="iconfont icon-jiahao"></i>
                <p>添加</p>
            </router-link>
        </div>
    </footer>
</template>

<script>
    export default {
        created() {

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
.footer .iconfont{
    font-size: .5rem;
}
</style>
