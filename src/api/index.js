import service from '../utils/request.js'

export function getWigetIp() {
  return service({
    url: 'https://blog.jczxw.cn/api/ip', 
    method: 'get'
  })
}