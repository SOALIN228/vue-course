import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  }).then(res => { // 调用成功时操作
    return new Promise(function (resolve, reject) {
      if (res.status === 200) {
        resolve(res)
      } else {
        reject(new Error('没有成功获取到数据!'))
      }
    }).catch(err => {
      console.log(err)
      return []
    })
  })
}

export const login = ({ userName, password }) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}

export const authorization = () => {
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  })
}
