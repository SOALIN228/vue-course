import Mock from 'mockjs'
import { getUserInfo } from './response/user'
import { getTableData } from './response/data'

Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/getTableData/, 'get', getTableData)

Mock.setup({ // 响应时间为区间随机值
  timeout: '100-600'
})
export default Mock
