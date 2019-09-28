import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';


class NoteContainer extends Component {

  state = {
    noteList: [],
    clickedNote: false,
    selectedNote: {
      title: '',
      body: ''
    }
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

    this.setState({
      selectedNote: {
        title: e.title,
        body: e.body,
        id: ''
      }
    })
    // return selectedNote
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar list={this.state.noteList} handleNoteDisplay={this.handleNoteDisplay}/>)}
          <Content selectedNote={this.state.selectedNote}/>
        </div>
      </Fragment>
    );
  }
}


export default NoteContainer;
