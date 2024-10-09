import React from 'react'
import './EditFile.css'
import { useForm } from 'react-hook-form'
function EditFile({x}) {
    let {setArr,arr,setEdit,id} = x
    let {register,handleSubmit,formState: {errors}} = useForm()
    let handleForm=(obj)=>{
        const newar = arr.map(ele=>ele.id===id?{...ele,name:obj.name,desc:obj.desc}:ele)
        setArr(newar)
        setEdit(false)
    }
    let task = arr.find(ele => ele.id === id);
    let name = task?.name;
    let desc = task?.desc;
  return (
    <div className='edit'>
        <form action="" onSubmit={handleSubmit(handleForm)}>
            <div className='flex'>
                <h2>Add task</h2>
                <p style={{cursor:'pointer',fontSize:'25px',marginRight:'10px'}} onClick={() => setEdit(false)}>✕</p>
            </div>
            <div className='flex'>
                <label htmlFor="tag">Task name</label>
                <input type="text" {...register('name',{required:true})} id="tag" defaultValue={name}/>
                {errors.name && <p className='err'>*This field is required</p>}
            </div>
            <div className='flex'>
                <label htmlFor="">Description</label>
                <textarea name="desc" id="desc" {...register('desc',{required:true})} rows="4" cols="30" defaultValue={desc}></textarea>
                {errors.desc && <p className='err'>*This field is required</p>}
            </div>
            <button type="submit" className='btn'>Add</button>
        </form>
    </div>
  )
}

export default EditFile