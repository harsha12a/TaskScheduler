import React, { useState } from 'react'
import './Block.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import EditFile from '../EditFile/EditFile';
function Block(props) {
    let {arr,ele,setArr} = props.x
    let [edit,setEdit] = useState(false)
    let id = ele.id
    let handleDel = ()=>{
        const newar = arr.filter(ele=>ele.id!==id)
        setArr(newar)
    }
  return (
    <div className='block'>
        <div className='flex'>
            <h1>{ele.name}</h1>
            <div style={{fontSize:'25px'}}>
              <MdEdit style={{cursor:'pointer',marginRight:'20px'}} onClick={()=>setEdit(true)}/>
              <MdDelete style={{cursor:'pointer',}} onClick={handleDel}/>
            </div>
        </div>
        {edit && <EditFile x={{setArr,arr,setEdit,id}}/>}
        <p style={{color:'#D3D3D3'}}>{ele.desc}</p>
    </div>
  )
}

export default Block