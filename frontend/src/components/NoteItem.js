import React from 'react';

const NoteItem = (props) => (
  <li onClick={(e) => props.handleNoteDisplay(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.substring(0, 20)}...</p>
  </li>
);
export default NoteItem;
