import React from 'react'
import './index.css'
const DestinationsItems = (props) => {
    const {destinationItem} = props
    const {id,name,imgUrl}=destinationItem
  return (
    <div className='main-div'>
      <div>
        <img src={imgUrl} alt={id+name}/>
        <p>{name}</p>
      </div>
    </div>
  )
}

export default DestinationsItems
