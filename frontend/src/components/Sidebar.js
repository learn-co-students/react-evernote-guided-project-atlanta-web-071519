import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList selectNote={this.props.selectNote} allNotes={this.props.allNotes}/>
        <button onClick={(e) => console.log("someone wants to add a new note", e)}>New</button>
      </div>
    );
  }
}

export default Sidebar;
