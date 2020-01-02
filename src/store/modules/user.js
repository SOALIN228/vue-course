import { setToken } from '@/lib/util'
import { login, authorization } from '@/api/user'

const actions = {
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      login({ userName, password }).then(res => {
        if (res.code === 200 && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('token 获取失败'))
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  authorization () {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (res.code === 401) {
          reject(new Error('token 获取失败'))
        } else {
          setToken(res.data.token) // 重新设置token，续命
          resolve(res.data.rules.page)
        }
      }).catch(err => {
        reject(err)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  actions
}
