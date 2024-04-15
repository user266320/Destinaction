import React from 'react'
import { useState } from 'react';
import DestinationsItems from '../DestanactionItems'
import { IoMdSearch } from "react-icons/io";
import './index.css'
const Destination = (props) => {
    const {destinationsList}=props
    const [search_value,setSearch]=useState('')
    const onChange= (event)=>{
      console.log(event.target.value)
      setSearch(event.target.value)
    }
    const search_results=destinationsList.filter((each)=>
      each.name.toLowerCase().includes(search_value.toLowerCase())
    )
  return (
    <div className='main-container'>
      <h1>Destination Search</h1>
      <div className='input-container'>
        
        <input onChange={onChange} value={search_value} type='search' placeholder='search destination place'/>
        <label id='search-icon' htmlFor="search"><IoMdSearch size={25} /></label>
      </div>
      
      <ul >
      {search_results.map((eachItem) => (
        <DestinationsItems destinationItem={eachItem} key={eachItem.id} />
      ))}
      </ul>
    </div>
  )
}

export default Destination
