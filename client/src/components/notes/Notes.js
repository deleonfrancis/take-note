import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NoteContext from "../../context/note/noteContext";
import NoteItem from "./NoteItem";
import RingLoader from "react-spinners/RingLoader";

function Notes() {
  const noteContext = useContext(NoteContext);

  const { notes, filtered, getNotes, loading } = noteContext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  if (notes !== null && notes.length === 0 && !loading) {
    return (
      <div>
        <h6>Please add a note...</h6>
      </div>
    );
  }
  return (
    <Fragment>
      {notes !== null && !loading ? (
        <TransitionGroup>
          <div className="row">
            {filtered !== null
              ? filtered.map((note) => (
                  <CSSTransition
                    key={note._id}
                    timeout={1500}
                    classNames="item"
                  >
                    <NoteItem note={note} />
                  </CSSTransition>
                ))
              : notes.map((note) => (
                  <CSSTransition
                    key={note._id}
                    timeout={1500}
                    classNames="item"
                  >
                    <NoteItem note={note} />
                  </CSSTransition>
                ))}
          </div>
        </TransitionGroup>
      ) : (
        <RingLoader />
      )}
    </Fragment>
  );
}

export default Notes;
