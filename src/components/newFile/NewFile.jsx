import React from 'react'
import './NewFile.css'
import { useForm } from 'react-hook-form';
function NewFile(props) {
    let {register,handleSubmit,formState: {errors}} = useForm()
    let {arr,setStat,setArr} = props.x
    let handleForm = (data) => {
        arr.push(data)
        setArr(arr);
        setStat(false)
        arr.map((ele,index)=>(
            ele.id = index+1
        ))
    }
  return (
    <div className='newn'>
        <form action="" onSubmit={handleSubmit(handleForm)}>
            <div className='flex'>
                <h2>Add task</h2>
                <p style={{cursor:'pointer',fontSize:'25px',marginRight:'10px'}} onClick={() => setStat(false)}>✕</p>
            </div>
            <div className='flex'>
                <label htmlFor="tag">Task name</label>
                <input type="text" {...register('name',{required:true})} id="tag" />
                {errors.name && <p className='err'>*This field is required</p>}
            </div>
            <div className='flex'>
                <label htmlFor="">Description</label>
                <textarea name="desc" id="desc" {...register('desc',{required:true})} rows="4" cols="30"></textarea>
                {errors.desc && <p className='err'>*This field is required</p>}
            </div>
            <button type="submit" className='btn'>Add</button>
        </form>
    </div>
  )
}

export default NewFile