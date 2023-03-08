import React, { useContext } from "react";
import NoteContext from "../context/notes/NotesContext";
export default function NoteItem(props) {
  const note= props.note;
  
  const context=useContext(NoteContext);
  // To delete Note from frotend 
  const deleteNote=()=>{
    context.deleteNoteBackend(note._id);
  }
   // To edit Note from frotend 
  const editNote=()=>{
    context.editNoteBackend(note._id);
  }
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="far fa-trash-alt mx-2" onClick={deleteNote}></i>
            <i className="far fa-edit mx-2" onClick={editNote}></i>
          </div>
          <p className="card-text"> {note.description}</p>
        </div>
      </div>
    </div>
  );
}
