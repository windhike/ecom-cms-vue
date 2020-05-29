import { post } from '../plugin/axios'

export async function customImageUpload(file) {
  const res = await post('cms/file/image', { file })
  return res
}

/** 判断是否是空对象 */
export function isEmptyObj(data) {
  if (!data) return true
  return JSON.stringify(data) === '{}'
}
