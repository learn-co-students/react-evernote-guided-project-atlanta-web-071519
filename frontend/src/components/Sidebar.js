import React, { Component } from 'react';
import NoteList from './NoteList';

const Sidebar = (props) => {


    return (
      <div className='master-detail-element sidebar'>

        <NoteList noteBar={props.list} handleNoteDisplay={props.handleNoteDisplay}/>
        <button>New</button>
      </div>
    );
  
}

export default Sidebar;
