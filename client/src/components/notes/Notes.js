import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NoteContext from "../../context/note/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
  const noteContext = useContext(NoteContext);

  const { notes, filtered } = noteContext;

  if (notes.length === 0) {
    return (
      <div>
        <h6>Please add a note...</h6>
      </div>
    );
  }
  return (
    <Fragment>
      <TransitionGroup>
        <div className="row">
          {filtered !== null
            ? filtered.map((note) => (
                <CSSTransition key={note._id} timeout={1500} classNames="item">
                  <NoteItem note={note} />
                </CSSTransition>
              ))
            : notes.map((note) => (
                <CSSTransition key={note._id} timeout={1500} classNames="item">
                  <NoteItem note={note} />
                </CSSTransition>
              ))}
        </div>
      </TransitionGroup>
    </Fragment>
  );
}

export default Notes;
