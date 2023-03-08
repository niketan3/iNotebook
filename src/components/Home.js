import React, {useContext, useState}  from 'react'
import AddNote from './AddNote'
import Note from './Note'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
export default  function Home() {
  let navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token'))
    {    // If the user is not logged in then dont show the home page 
        navigate('/login');
    }
  },[])
  return (
    <div className="container">
        <AddNote></AddNote>
        <Note></Note>
    </div>
  )
}
