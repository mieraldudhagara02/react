import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Formdet() {
  const navigation=useNavigate()

  function Logout() {
    alert("out")
    navigation("/login")
    
  }

  useEffect(()=>{
      let username=sessionStorage.getItem("username")
      if(username===""|| username===null){
        navigation("/login")
      }
  },[])


  return (
    <div>
      <h1 className='ms-3'>Rutu Dobariya</h1>
      <button type="button"  className='ms-3 text-white bg-primary fs-4' onClick={Logout} >Log out</button>
    </div>
  )
}

export default Formdet
