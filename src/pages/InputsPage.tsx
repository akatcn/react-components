import React, { useState } from 'react'
import Input from '../components/Input/Input'
const textInputStyle = `
  py-3
  px-2
  rounded-md
  border
  text-xs
`
function InputsPage() {
  const [value, setValue] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue((oldState) => {
      return e.target.value;
    })
  }
  
  return (
    <div>
      <form>
        <Input inputType="text" onChangeHandler={onChangeHandler} value={value} style={textInputStyle}/>
      </form>
    </div>
  )
}

export default InputsPage