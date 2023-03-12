import React, { useState } from 'react'
import Modal from '../components/Modal/Modal'
import ModalPortal from '../components/Modal/ModalPortal'

function ModalsPage() {
  const [isShow, setIsShow] = useState(false);
  const [isShowB, setIsShowB] = useState(false);
  const handleShowModalClick = () => {
    document.body.style.overflow = 'hidden';
    setIsShow(true)
  }
  const handleClose = () => {
    document.body.style.removeProperty('overflow');
    setIsShow(false)
  }

  const handleShowModalClickB = () => {
    document.body.style.overflow = 'hidden';
    setIsShowB(true)
  }
  const handleCloseB = () => {
    document.body.style.removeProperty('overflow');
    setIsShowB(false)
  }
  
  return (
    <div>
      <button className="p-4 rounded-lg bg-blue-500 text-white" onClick={handleShowModalClick}>모달 보여주기</button>
      <button className="p-4 rounded-lg bg-blue-500 text-white" onClick={handleShowModalClickB}>모달B 보여주기</button>
      <ModalPortal>
        {
          isShow && <Modal onClose={handleClose} isActiveOutsideClick={true} />
        }
        {
          isShowB && <Modal onClose={handleCloseB} isActiveOutsideClick={false} />
        }
      </ModalPortal>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
      <p>TEXT</p>
    </div>
  )
}

export default ModalsPage