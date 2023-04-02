
const checkMinLength = (value: string, min: number): string | void => {
  if(value.length < min) {
    return `Длина должна быть больше ${min}`
  }
}
const checkMaxLength = (value: string, max: number): string | void  => {
  if(value.length > max) {
    return `Длина должна быть меньше ${max}`
  }
}


export const isEmail = (value: string): string | void => {
  let regex = /[\da-z-]+@+[a-z]+.+[a-z]/i
  if(!regex.test(value))
    return "Введите имейл"
}

export const isPassword = (value: string): string | void => {
  const checkMaxLengthResult =  checkMaxLength(value, 40);
  const checkMinLengthResult =  checkMinLength(value, 8);
  if(checkMaxLengthResult)
    return checkMaxLengthResult
  if(checkMinLengthResult)
    return checkMinLengthResult

  let hasDigit = /\d/
  let hasUpperCaseChar = /[A-Z]/
  if(!hasDigit.test(value))
    return "Должна быть хотя бы одна цифра"
  if(!hasUpperCaseChar.test(value))
    return "Должна быть хотя бы одна заглавная буква"
}

export const isTel = (value: string): string | void => {
  const checkMaxLengthResult = checkMaxLength(value, 15);
  const checkMinLengthResult = checkMinLength(value, 10);
  if(checkMaxLengthResult)
    return checkMaxLengthResult
  if(checkMinLengthResult)
    return checkMinLengthResult

  let regex = /^[+\d]+[\d]+\d$/
  if(!regex.test(value))
    return "Введите телефон"
}

export const isLogin = (value: string): string | void => {
  const checkMaxLengthResult =  checkMaxLength(value, 20);
  const checkMinLengthResult =  checkMinLength(value, 3);
  if(checkMaxLengthResult)
    return checkMaxLengthResult
  if(checkMinLengthResult)
    return checkMinLengthResult

  let regex = /^[+\d]+[\d]+\d$/
  if(!regex.test(value))
   return "Не соответствует шаблону"
}

export const isName = (value: string): string | void => {

  let hasSpace = /\s/
  let hasDigit = /\d/
  let regex = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*/u
  if(hasSpace.test(value))
    return "Не должно быть пробелов"
  if(hasDigit.test(value))
    return "Не должно быть цифр"
  if(regex.test(value))
    return "Не соответствует шаблону"
}