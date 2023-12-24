import service from '.'

// 文档列表
export function getDocs(agent_id) {
  return service({
    method: 'GET',
    url: `/widget/doc/${agent_id}/docs`
  })
}

// 上传文档
export function upDoc(agent_id, formData) {
  return service({
    method: 'POST',
    url: `/widget/doc/upload/${agent_id}`,
    headers: { 'Content-Type': 'multipart/form-data' },
    data: formData
  })
}

// 提示词列表
export function getPrompts(agent_id) {
  return service({
    method: 'GET',
    url: `/widget/prompt/${agent_id}/list`
  })
}