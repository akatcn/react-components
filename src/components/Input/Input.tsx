import React from 'react'

// input 타입이 될 수 있는 것들을 미리 지정한다
const inputTypes = [
  "button", "checkbox", "color", "date", 
  "datetime-local", "email", "file", "hidden", 
  "image", "month", "number", "password", 
  "radio", "range", "reset", "search", "submit", 
  "tel", "text", "time", "url", "week"
] as const

type InputProps = {
  inputType: typeof inputTypes[number],
  onChangeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value?: string,
  style: string,
}

function Input({inputType, onChangeHandler, value, style}: InputProps) {
  return (
    <input type={inputType} onChange={onChangeHandler} value={value} className={style}/>
  )
}

export default Input