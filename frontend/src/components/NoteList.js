import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.noteBar.map(note => <NoteItem note={note} handleNoteDisplay={props.handleNoteDisplay}/> )}
      
    </ul>
  );
}

export default NoteList;
