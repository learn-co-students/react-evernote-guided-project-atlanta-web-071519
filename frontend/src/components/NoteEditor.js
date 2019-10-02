import React, { Component } from 'react';
import Content from './Content'

class NoteEditor extends Component {

  constructor(props) {
    super(props)
    // console.log(props)
    this.state = {
      editedNote: {
        title: props.editedNote.title,
        body: props.editedNote.body,
        id: props.editedNote.id
      }
      // this.handleSubmit = this.handleSubmit.bind(this)
    }
  }

  handleNoteUpdate = (event) => {
    // console.log(event.target.value)
    debugger
    let noteUpdate = this.state.editedNote
    noteUpdate.title = event.target.title.value
    noteUpdate.body = event.target.value.body
    noteUpdate.id = this.props.editedNote.id

    // this.setState({
    //   editedNote: noteUpdate
    // })
  }

  // handleFormSubmit = (event) => {
  //   console.log(event)
  //   event.preventDefault()
  //   this.props.updateNote(this.props.value, this.state.editedNote)
  // }

  // handleSubmit = (event, updated) => {
  //   event.preventDefault()
  //   console.log(event)
  //   //update the editedNote with new value that the user typed/submitted and change the state tat contains the note
  // }

  render() {
    return (
      <form onSubmit={(event) => this.props.handleSubmit(event, this.state.editedNote)} className="note-editor">
        <input onChange={this.handleNoteUpdate} value={this.state.editedNote.title} type="text" name="title" />
        <textarea onChange={this.handleNoteUpdate} value={this.state.editedNote.body} type="text" name="body" />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
