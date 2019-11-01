import axios from 'axios'
import { baseURL } from '@/config'
import { getToken } from './util'

class HttpRequest {
  constructor (baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {} // 请求队列
  }

  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {}
    }
    return config
  }

  distroy (url) {
    delete this.queue[url] // 删除队列
    if (!Object.keys(this.queue).length) {
      // loading隐藏
    }
  }

  interceptors (instance, url) {
    instance.interceptors.request.use(config => { // 请求拦截器
      // 在发送请求之前做些什么
      // 比如全局loading。。。
      if (!Object.keys(this.queue).length) {
        // loading显示
      }
      this.queue[url] = true // 添加队列
      config.headers['Authorization'] = getToken()
      return config
    }, error => {
      // 对请求错误做些什么
      return Promise.reject(error)
    })

    instance.interceptors.response.use(response => { // 响应拦截器
      // 对响应数据做点什么
      this.distroy(url)
      const { data } = response // 只返回响应的部分数据
      return data
    }, error => {
      // 对响应错误做点什么
      this.distroy(url)
      return Promise.reject(error)
    })
  }

  request (options) {
    const instance = axios.create() // 创建实例
    options = Object.assign(this.getInsideConfig(), options) // 合并配置
    this.interceptors(instance, options.url) // 拦截器
    return instance(options)
  }
}

export default HttpRequest
