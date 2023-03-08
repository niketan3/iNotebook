import React, { useState} from 'react'
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate=useNavigate();
    const[details,setdetails]=useState([]);
    const onChange=(e)=>{
        if(e.target.value!=null)
        {
            if(e.target.name==='email')
            {
                const password=details.password;
                setdetails({email:e.target.value,password:password});
            }
            else
            {
                const email=details.email;
                setdetails({password:e.target.value,email:email});
            }
        }
    }
    const FetchToken=async()=>
    {
        
        console.log(details);
        const email=details.email;
        const password=details.password;
        const url="/auth/login";
        const response = await fetch(url, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({"email":email,"password":password})
          });
          const json= await response.json();
          console.log(json);
          
          if(json.token ==="Incorrect Password")
          {
            console.log("wrongPssword");
          }
          else
          {
            
          }
          if(json.succes)
          { 
            localStorage.setItem("token",json.token);
            // If User successfully logged in navigate page to localhost:3000/
             navigate('/')
          }
          else
          {
            alert("Lavdya Nit tak");
            navigate(0);
          }
    }
    const Submit= (e)=>{
      console.log("Hii");
      // let history=useNavigate();
        e.preventDefault();
        FetchToken();
    }
  return (
    <div className='align-items-center container my-3' >
        <form onSubmit={Submit} className="align-items-center">
  <div className="mb-3 align-items-center">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp"  onChange={onChange} required/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange} required/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}
