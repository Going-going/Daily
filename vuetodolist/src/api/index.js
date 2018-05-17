import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000';   // axios默认url链接 传参只需川/之后的
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 首页轮播图
export const getSlides = () => {
    return axios.get('/slide')
}

// 获取热门图书列表
export const getHotbooks = () => {
  return axios.get('/booklist?type=hot')  
}

// 获取图书列表
export const getBooklist = () => {
  return axios.get('/booklist')
}

//删除
export const deleteBook = () => {
  return axios.delete('/book')
}
