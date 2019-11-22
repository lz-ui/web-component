import service from '../utils/request.js'

export function getWigetIp(data) {
  return service({
    url: 'https://blog.jczxw.cn/api/ip', 
    method: 'get',
    params:{
      ...data
    }
  })
}