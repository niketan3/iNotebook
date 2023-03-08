import React, { useState } from "react";
import NoteContext from "./NotesContext";
const NoteState=(props)=>{
    const iNotes=[];
    const [Notes,setNotes]=useState(iNotes);

    // fetching The notes of User 
    const FetchNote=async()=>{
      // API call of backend 
      console.log("Running Fetch")
      const url="/notes/fetchallNotes";
      const response = await fetch(url, {
        method: "GET", 
        headers: {
          Authentication: 'Bearer Token',
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        }, 
      });
      const json=await response.json();
    
      // Now we have got all the notes Correspoding the User Provided in auth-token and we will save this notes in Notes 
      setNotes(json);
    }
    

    // Adding note in backend 
    const addNoteBackend=async(title,description)=>{
      console.log("AddingNote");
      const url="/notes/addNotes";
      const response = await fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        }, 
        body:JSON.stringify({
          "title":title,
         "description":description
        })
      });
      // By this api call the note will get added into backend But it should get reflected in frontend as well. As we are not using fetch user every time We have to modify the Notes Array
      const json=await response.json();   //In respone Backend is sending the user use that to save it into frontend without relaoding

      setNotes(Notes.concat(json));
    }


     // To delete Note from Backend  
    const deleteNoteBackend=async(id)=>{
      console.log("Deleting Note");
      const url=`/notes/deleteNotes/${id}`;
      const response = await fetch(url, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
      });
      const json=await response.json();
  
      const newNotes=Notes.filter((note)=>{
        {return note._id!==id}; 
      })     //This will delete note with _id =id and append remaining into newNotes 

      setNotes(newNotes);
    }
     // To edit Note from Backend
    const editNoteBackend=async (title,description,id)=>{
      console.log("Editing Note");
      const url=`/notes/updateNotes/${id}`;
      const response = await fetch(url, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        },
        body:JSON.stringify({
          "title":title,
          "description":description
        })
      });
      // Note will get edited in backend 

      // Change should be reflected in Notes Array without relaoding 
      const json=await response.json();

      const newNotes=JSON.parse(JSON.stringify(Notes));
      for(let i=0;i<newNotes.length;i++)
      {
          if(id===newNotes._id)
          {
            newNotes.title=title;
            newNotes.description=description;
          }
      }
      setNotes(newNotes);
    }
    return (
        <NoteContext.Provider value={{Notes,addNoteBackend,deleteNoteBackend,editNoteBackend,FetchNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;