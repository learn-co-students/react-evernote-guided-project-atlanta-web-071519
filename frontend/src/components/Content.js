import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';
// import NoteContainer from './NoteContainer'; 

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = (props) => {
    // console.log(props)
    if (props.editedNote.id === props.selectedNote.id) {
      return <NoteEditor editedNote={props.editedNote} updateNote={props.updateNote} handleSubmit={props.handleSubmit}/>;
    } else if (props.selectedNote.id) {
      return <NoteViewer selectedNote={props.selectedNote} handleButton={props.handleButton}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent(this.props)}
      </div>
    );
  }
}

export default Content;
