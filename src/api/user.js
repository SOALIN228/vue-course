import axios from './index'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  }).then(res => { // 调用成功时操作
    console.log(res)
  }).catch(error => { // 调用失败时操作
    console.log(error)
    // 可以返回失败数据
  })
}
