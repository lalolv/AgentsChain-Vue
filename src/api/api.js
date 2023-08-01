import service from '.'

// 首页轮播图
export function getBots() {
  return service({
    method: 'GET',
    url: '/bot/list'
  })
}
