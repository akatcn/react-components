// 개선 가능한 것들
// 드롭다운 버튼 눌렀을 때 border의 width가 증가하는 것으로 인해 내부 텍스트가 밀려나는 현상 제거해야함
// 선택할 수 없는 아이템들은 알파값 낮추고 선택 안되게끔 커서값을 변경해주어야 함
// 펼쳐질 아이템이 하나도 없더라도 일단 선택창을 펼치고, 선택할 수 없다는 안내문구를 띄워야 함
// 선택창 외부를 클릭하였을 때 선택창이 닫히게끔 해야함

import React, { useEffect, useState } from 'react'

type ItemType = {
  id: number,
  title: string
}

type DropdownProps = {
  items: ItemType[]
}

function Dropdown({items}: DropdownProps) {
  const [isDown, setIsDown] = useState(false);  // 드롭다운 펼쳐짐 여부
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);  // 선택된 아이템

  // 드롭다운 버튼 클릭하였을 때의 핸들러
  const toggleDropdown = () => {
    setIsDown((oldState) => {
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
    setIsDown(false);  // 드롭다운 창 닫는다
  }

  useEffect(() => {
    console.log("선택된 아이템:", selectedItem);
  }, [selectedItem])

  return (
    <div className="relative">
      {/* 드롭다운 버튼 */}
      <button onClick={toggleDropdown} className={`w-full h-14 rounded-lg border p-3 hover:border-blue-500 hover:border-2 transition-all duration-200 text-gray-500 ${isDown && 'border-blue-500 border-2'}`}>
        <div className="flex justify-between">
          <div>{selectedItem === null ? "선택해주세요" : selectedItem.title}</div>
          <div>Chevron</div>
        </div>
      </button>
      {/* 선택 상자 */}
      {isDown &&
      <div className="absolute w-full p-3 border border-gray-300 rounded-lg mt-2">
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