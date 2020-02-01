import React, { Component } from "react";
import ReactDom from "react-dom";
import "./app.scss";

class App extends Component {
  state = {
    notes: []
  };
  handleAddNote = text => {
    this.setState(prevState => ({
      notes: prevState.notes.concat(text)
    }));
  };

  render() {
    return (
      <div className="container">
        <NewNote onAddNote={this.handleAddNote} />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

const NewNote = ({ onAddNote }) => (
  <div className="newnote">
    <input
      type="text"
      name=""
      id=""
      className="newnoteInput"
      placeholder="Digite sua nota ..."
      onKeyPress={event => {
        {
          event.key === "Enter" ? onAddNote(event.target.value) : null;
        }
      }}
    />
  </div>
);

const NoteList = ({ notes }) => (
  <div className="noteList">
    {notes.map(note => (
      <div className="note">{note}</div>
    ))}
  </div>
);

ReactDom.render(<App />, document.getElementById("root"));
