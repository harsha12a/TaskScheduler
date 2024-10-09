import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import NewFile from './components/newFile/NewFile'
import Body from './components/Body/Body'
function App() {
  let [stat,setStat] = useState(false)
  let [arr,setArr] = useState([])
  let callFile = () => {
    setStat(true)
  }
  return (
    <>
      <Header />
      <p className='addEvent' onClick={callFile}>+</p>
      {
        stat && <NewFile x={{arr,setStat,setArr}}/> 
      }
      <Body x={{arr,setArr}}/>
    </>
  )
}

export default App