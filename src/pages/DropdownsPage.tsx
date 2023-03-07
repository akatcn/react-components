import React from 'react'
import Dropdown from '../components/Dropdown/Dropdown'

const dummyItems = {
  data: [
    {
      id: 0,
      title: "First Item"
    },
    {
      id: 1,
      title: "Second Item"
    },
    {
      id: 2,
      title: "Third Item"
    },
    {
      id: 3,
      title: "Fourth Item"
    },
    {
      id: 4,
      title: "Fifth Item"
    },
  ]
}

function DropdownsPage() {
  return (
    <div>
      <Dropdown items={dummyItems.data}/>
    </div>
  )
}

export default DropdownsPage