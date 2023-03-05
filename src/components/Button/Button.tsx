import React from 'react'

// 사용하는 컴포넌트로부터 이벤트 핸들러, 레이블, 스타일 값을 받아 적용한다
type ButtonProps = {
  onClickHandler: (e: React.MouseEvent<HTMLElement>) => void,
  label: string,
  style: string
}

function Button({onClickHandler, label, style}: ButtonProps) {
  return (
    <button
      onClick={onClickHandler}
      className={style}
    >
      {label}
    </button>
  )
}

export default Button