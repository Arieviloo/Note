import React, { Component } from "react";
import ReactDom from "react-dom";
import "./app.scss";

class App extends Component {
  state = {
    notes: ["state 1", "state 2"]
  };
  render() {
    return (
      <div className="container">
        <NewNote />
        <NoteList notes={this.state.notes} />
      </div>
    );
  }
}

const NewNote = () => (
  <div className="newnote">
    <input
      type="text"
      name=""
      id=""
      className="newnoteInput"
      placeholder="Digite sua nota ..."
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
