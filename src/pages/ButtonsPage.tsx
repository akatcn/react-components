import React from 'react'
import Button from '../components/Button/Button'

const buttonStyle = `
  bg-blue-500
  hover:bg-blue-600
  active:bg-blue-400
  w-48
  p-4
  rounded-xl
  transition-color
  duration-300
  text-white
  text-bold
`

function ButtonsPage() {
  return (
    <div>
      <Button onClickHandler={(e)=>console.log(e.target)} label="버튼" style={buttonStyle}/>
    </div>
  )
}

export default ButtonsPage