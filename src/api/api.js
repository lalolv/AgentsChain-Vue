import service from '.'

// 智能体列表
export function getAgents() {
  return service({
    method: 'GET',
    url: '/agent/list'
  })
}

// 智能体详情
export function getAgentDetail(agent_id) {
  return service({
    method: 'GET',
    url: '/agent/detail/' + agent_id
  })
}
