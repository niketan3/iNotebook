import NoteContext from "../context/notes/NotesContext";
import React from "react";
import { useContext } from "react";
import NoteItem from "./NoteItem";
import { useEffect } from "react";
export default function Note() {
  const context = useContext(NoteContext);
  const { Notes,FetchNote} = context;
  // Before Getting all the notes first fetch the notes by running fetchNotes
  useEffect(()=>{
    FetchNote();
  },[])    //[] due to this useEffect will get run only ones relaoding take place 
  return(
  <div className="row my3">
    {Notes.map((note) => {
        return <NoteItem note={note} key={note._id}></NoteItem>
    })}
  </div>
  )
}
