import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';


class NoteContainer extends Component {

  state = {
    noteList: [],
    selectedNote: {
      title: null,
      body: null,
      id: null
    },
    editedNote: [],
    allNotes: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/api/v1/notes')
    .then(resp => resp.json())
    .then(notes => {
      this.setState({
        noteList: notes
      })
    })
  }

  handleNoteDisplay = (e) => {
    // console.log(e)
    
    this.setState({
      selectedNote: {
        title: e.title,
        body: e.body,
        id: e.id
      }
    })
  }


  //when edit button is clicked, trigger this callback function and update the state of the selectedNote
  handleButton = (note) => {
    // console.log(note)
    this.setState({
      editedNote: note
    })
  }


  updateNote = (event, updatedNote) => {
    console.log('update in note container.js')
  }



  

  handleSubmit = (event, editNote) => {
    event.preventDefault()
    console.log('update made it to parent node')
    let newNotes = [...this.state.noteList].map(note => {
      if (note.id === editNote.id) {
        return editNote
      }
      else {
        return note
      }
    })
    this.setState({
      noteList: newNotes
  })
    //update the editedNote with new value that the user typed/submitted and change the state tat contains the note
  }
  

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar list={this.state.noteList} handleNoteDisplay={this.handleNoteDisplay}/>)}
          <Content selectedNote={this.state.selectedNote} handleButton={this.handleButton} editedNote={this.state.editedNote} updatedNote={this.updateNote} handleSubmit={this.handleSubmit}/>
        </div>
      </Fragment>
    );
  }
}


export default NoteContainer;


//The noteContainer holds the initial state: NoteList and selectedNote.
//The NoteList state is set/updated with the data returned from the fetch. 
//There are three components that belong to the NoteContainer: Search, Sidebar, and Content.
//We pass in the noteList props to the sidebar. We also pass the handleNoteDisplay callback function in Sidebar.
//




  // handleSave = (e, editNote) => {
  //   console.log(e)
  //   e.preventDefault()
  //   let newNotes = [...this.state.noteList].map(note => {
  //     if (note.id === editNote.id) {
  //       return editNote
  //     }
  //     else {
  //       return note
  //     }
  //     this.setState({
  //       noteList: newNotes
  //   })
  //   })
  // }