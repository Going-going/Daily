<template>
    <div>
        <div>
            用户名<input type="text" v-model="username" />
        </div>
        <div>
            密码<input type="text" v-model="password" />
        </div>
        <button @click="loginIn">登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        loginIn() {
            window.localStorage.setItem('username', this.username);
            window.localStorage.setItem('password', this.password);
            this.$route.push('/index')
        }
    }
}
</script>

<style>

</style>
