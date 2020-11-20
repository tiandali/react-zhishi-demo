import request from "@/utils/request";

export function getTabelData(params) {
  return request({
    url: '/waw_mock/table_data"',
    method: "get",
    params
  });
}
