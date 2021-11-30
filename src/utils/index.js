
/**
 * @description sessionStory 本地存储
 */
 export function getSessionStorage (name) {
  return sessionStorage.getItem(name)
}
/**
 * @description sessionStory 获取本地存储信息
 */
export function setSessionStorage (name, value) {
  return sessionStorage.setItem(name, value)
}
/**
 * @description 清除本地信息
 */
export function clearSessionStorage () {
  sessionStorage.clear()
}
