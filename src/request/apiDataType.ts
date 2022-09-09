export default interface ApiDataTypes {
  code: number // 请求code值
  message: string // 请求返回的提示文字
  entity: {} // 请求的data
  [propName: string]: any
}
export const ApiData: ApiDataTypes = {
  code: 0,
  message: '',
  entity: {},
}