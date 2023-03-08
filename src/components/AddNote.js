import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NotesContext"
export default function AddNote() {
    const context=useContext(NoteContext);
    const [Note,setNote]=useState({title:"",description:""});
const onchange=(e)=>{
    if(e.target.value!=null)
    {
        if(e.target.name=='title')
        {
            const description=Note.description;
            setNote({title:e.target.value,description:description});
        }
        else
        {
            const title=Note.title;
            setNote({description:e.target.value,title:title});
        }
    }
}

// Adding Note from Frontend 
const onClickSubmit=(e)=>{
    e.preventDefault();    // It will stop realoding after clicking submit buttonn 
    // console.log(Note);
    context.addNoteBackend(Note.title,Note.description);
}
  return (
    <div className="container my-3">
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title "
            onChange={onchange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            onChange={onchange}
            />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onClickSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
