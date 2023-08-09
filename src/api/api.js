import service from '.'

// 机器人列表
export function getBots() {
  return service({
    method: 'GET',
    url: '/bot/list'
  })
}

// 机器人详情
export function getBotDetail(botid) {
  return service({
    method: 'GET',
    url: '/bot/detail/' + botid
  })
}
