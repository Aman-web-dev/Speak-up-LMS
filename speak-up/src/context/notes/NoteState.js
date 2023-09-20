import React,{useState} from "react";

import noteContext from "./noteContext";



const NoteState = ()=>{


    const state = {
        "name": "aman",
        "class":"8th"
    }

  return (
    <NoteState.provider value={state}>
          {props.children}
        </NoteState.provider>
  )
}



export default NoteState;