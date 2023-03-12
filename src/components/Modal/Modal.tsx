import React, { useEffect, useRef, useState } from 'react'

type ModalProps = {
  onClose: () => void,
  isActiveOutsideClick: boolean  // 모달창 외부 클릭시에 모달창 닫을지 여부를 받음. true이면 기능을 활성화한다
}

function Modal({ onClose, isActiveOutsideClick }: ModalProps) {
  const [inputText, setInputText] = useState("");
  const modalRef = useRef<HTMLDivElement | null>(null);

  // input의 onChange 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(() => {
      return e.target.value;
    })
  }

  // 확인 버튼 핸들러
  const handleConfirmClick = () => {
    alert(inputText);  // input에 입력된 내용 띄우기
    onClose();
  }

  // 취소 버튼 핸들러
  const handleCancelClick = () => {
    onClose();
  }

  useEffect(() => {
    if (isActiveOutsideClick) {  // 외부 클릭시에 닫히는 설정이 true일 때에만 활성화 한다
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {  // ref 객체가 직접 참조하고 있는 div 태그 외부를 클릭할 경우
          onClose();  // 모달창 닫는다
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700/50">  {/* 백그라운드 UI */}
      <div className="fixed w-96 h-96 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 overflow-y-scroll" ref={modalRef}>  {/* 모달 content */}
        <div>
          <button onClick={ onClose } className="rounded-full px-2 bg-blue-500 text-white">X</button>
        </div>
        <div>
          <input className="w-full p-2 border-2" type="text" value={inputText} onChange={handleChange} />
        </div>
        <div>
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
        <div>
          <button className="rounded-lg px-4 py-2 bg-blue-500 text-white" onClick={handleConfirmClick}>확인</button>
          <button className="rounded-lg px-4 py-2 bg-red-500 text-white" onClick={handleCancelClick}>취소</button>
        </div>
     </div>
    </div>
  )
}

export default Modal