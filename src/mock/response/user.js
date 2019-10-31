import Mock from 'mockjs'

export const getUserInfo = option => {
  const Random = Mock.Random

  const template = {
    'str|2-4': 'string',
    'email': Mock.mock('@email'),
    'date': Random.now('hour')
  }

  return Mock.mock(template)
}
