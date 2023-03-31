


export const isEmail = (value: string) => {
  let regex = /[\da-z-]+@+[a-z]+.+[a-z]/i
  if(regex.test(value))
    return true
  else
    return false
}

export const isPassword = (value: string) => {
  if(value.length > 40 || value.length < 8)
    return false
  let hasDigit = /\d/
  let hasUpperCaseChar = /[A-Z]/
  if(hasDigit.test(value) && hasUpperCaseChar.test(value))
    return true
  else
    return false
}

export const isTel = (value: string) => {
  if(value.length > 15 || value.length < 10)
    return false
  let regex = /^[+\d]+[\d]+\d$/
  if(regex.test(value))
    return true
  else
    return false
}

export const isLogin = (value: string) => {
  if(value.length > 20 || value.length < 3)
    return false
  let regex = /^[+\d]+[\d]+\d$/
  if(regex.test(value))
    return true
  else
    return false
}

export const isName = (value: string) => {

  let hasSpace = /\s/
  let hasDigit = /\d/
  let regex = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*/u
  if(!hasSpace.test(value) && !hasDigit.test(value) && regex.test(value))
    return true
  else
    return false
}