import React, { useState } from 'react'
import './Body.css'
import Block from '../Block/Block'
import NewFile from '../newFile/NewFile'
function Body(props) {
  let {arr,setArr}=props.x
  return (
    <div>
      {
        arr.map((ele,index)=>(
          <Block x = {{ele,arr,setArr}} key={index}/>
        ))
      }
    </div>
  )
}

export default Body