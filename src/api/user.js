import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'eudService/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'eudService/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'eudService/user/logout',
    method: 'post'
  })
}
