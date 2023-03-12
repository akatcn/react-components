import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'

type ModalProtalProps = {
  children: ReactNode  // 실제 모달창이 될 컴포넌트
}

function ModalPortal({ children }: ModalProtalProps) {
  const element = document.getElementById('modal') as HTMLElement;  // DOM 직접 접근하여 modal id를 가진 div 태그를 참조한다
  return (
    ReactDOM.createPortal(children, element)
  )
}

export default ModalPortal