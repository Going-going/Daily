import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:9000';   // axios默认url链接 传参只需川/之后的

export let getSlides = () => function() {
    return axios.get('/api/slider')
}

