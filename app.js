import React from "react";
import ReactDom from "react-dom";
import "./app.scss";

const App = () => (
  <div className="container">
    <NewNote />
    <NoteList />
  </div>
);

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

const NoteList = () => (
  <div className="noteList">
    <div className="note">1</div>
    <div className="note">2</div>
    <div className="note">3 </div>
  </div>
);

ReactDom.render(<App />, document.getElementById("root"));
