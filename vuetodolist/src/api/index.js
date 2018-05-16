import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000';   // axios默认url链接 传参只需川/之后的



export const getSlides = () => {
    return axios.get('/slide')
        
}

