import React, { useEffect, useRef, useState } from 'react'

type ItemType = {
  id: number,
  title: string
}

type DropdownProps = {
  items: ItemType[]
}

function Dropdown({items}: DropdownProps) {
  const [isShow, setIsShow] = useState(false);  // 드롭다운 펼쳐짐 여부
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);  // 선택된 아이템
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // 드롭다운 버튼 클릭하였을 때의 핸들러
  const toggleDropdown = () => {
    setIsShow((oldState) => {
      // props로 받은 items가 비어있다면 드롭다운 펼치지 않는다
      if (items.length < 1) {
        return false;
      }
      return !oldState;
    })
  }

  // 아이템 행 클릭하였을 때의 핸들러
  const clickItem = (item: ItemType) => {
    setSelectedItem((oldState) => {
      return item;
    })
    setIsShow(false);  // 드롭다운 창 닫는다
  }

  useEffect(() => {
    console.log("선택된 아이템:", selectedItem);
  }, [selectedItem])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 드롭다운 버튼 */}
      <button onClick={toggleDropdown} className={`w-full h-14 bg-white rounded-lg border p-3 hover:border-blue-500 hover:border-2 transition-all duration-200 text-gray-500 ${isShow && 'border-blue-500 border-2'}`}>
        <div className="flex justify-between">
          <div>{selectedItem === null ? "선택해주세요" : selectedItem.title}</div>
          <div>Chevron</div>
        </div>
      </button>
      {/* 선택 상자 */}
      {isShow &&
      <div className="absolute w-full bg-white p-3 border border-gray-300 rounded-lg mt-2 z-10">
        {items.map(item => 
          <div key={item.id}>
            <div onClick={() => clickItem(item)} className="p-3 hover:bg-gray-300 cursor-pointer rounded-lg" >
              {item.title}
            </div>
            <div className="border-b"></div>
          </div>
        )}
      </div>
      }
    </div>
  )
}

export default Dropdown