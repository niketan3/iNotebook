import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  let navigate = useNavigate();
  const[details,setdetails]=useState([]);
    const onChange=(e)=>{
        if(e.target.value!=null)
        {
            if(e.target.name==='email')
            {
                const password=details.password;
                const name=details.name;
                setdetails({email:e.target.value,password:password,name:name});
            }
            else if(e.target.name==='name')
            {
                const password=details.password;
                const email=details.email;
                setdetails({email:email,password:password,name:e.target.value});
            }
            else
            {
                const name=details.name;
                const email=details.email;
                setdetails({email:email,password:e.target.value,name:name});
            }
        }
    }
  const submitUser =async (e) => {
    console.log("Hii");
    e.preventDefault();
    const name=details.name;
    const email=details.email;
    const password=details.password;
    const url="/auth/signup";
        const response = await fetch(url, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({"email":email,"password":password ,"name":name})
          });
    const json= await response.json();
    if(json.succes)
    {
        navigate("/login");
    }
    else
    {
        alert("Ja Bhikar Zhavnya");
        navigate(0);
    }
  };
  return (
    <div className="container align-items-center my-3">
      <form onSubmit={submitUser}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your Name"
            required
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}
