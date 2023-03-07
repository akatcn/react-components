import React, { useEffect, useState } from 'react'

type ItemType = {
  id: number,
  title: string
}

type DropdownProps = {
  items: ItemType[]
}

function Dropdown({items}: DropdownProps) {
  const [isDown, setIsDown] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  const toggleDropdown = () => {
    setIsDown((oldState) => {
      return !oldState;
    })
  }

  useEffect(() => {
    console.log("선택된 아이템:", selectedItem);
  }, [selectedItem])

  const clickItem = (item: ItemType) => {
    setSelectedItem(() => {
      return item;
    })
    setIsDown(false);
  }

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className={`w-full h-14 rounded-lg border p-3 hover:border-blue-500 hover:border-2 transition-all duration-200 text-gray-500 ${isDown && 'border-blue-500 border-2'}`}>
        <div className="flex justify-between">
          <div>{selectedItem === null ? "선택해주세요" : selectedItem.title}</div>
          <div>Chevron</div>
        </div>
      </button>
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