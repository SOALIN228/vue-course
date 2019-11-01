// 业务相关代码
import Cookies from 'js-cookie'

export const setTitle = (title = 'admin') => {
  window.document.title = title
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}
