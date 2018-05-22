import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000';   // axios默认url链接 传参只需川/之后的
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
// 轮播图
export const getSlides = () => {
    return axios.get('/slide')
}

// 热门图书
export const getHotbooks = () => {
  return axios.get('/hotbook')  
}

// 获取列表
export const getBooks = (params) => {
  return axios.get('/booklist', {
    params: params
  })
}
// 获取某条数据
export const getBook = (id) => {
  return axios.get('/booklist', {
    params: {
      id: id
    }
  })
}
//删除
export const deleteBook = (id) => {
  return axios.delete('/booklist',{
    params: {
      id: id
    }
  })
}

// 添加
export const addBooks = () => {
  return axios.post('/booklist')
}


// 修改 注意: 必须添加头部 不添加会报头部未允许
export const changeBook = (params) => {
  return axios.put('/booklist',params)
}