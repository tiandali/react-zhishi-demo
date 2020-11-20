import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/v1/caseCatalog/treemenu',
    method: 'get',
    params
  })
}
