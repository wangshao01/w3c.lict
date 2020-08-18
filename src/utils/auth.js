import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

const roleNow = 'roleNow'

export function getRoleNow() {
  return Cookies.get(roleNow)
}

export function setRoleNow(role) {
  return Cookies.set(roleNow, role)
}

export function removeRoleNow() {
  return Cookies.remove(roleNow)
}
