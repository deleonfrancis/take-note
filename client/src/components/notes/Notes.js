import React, { Fragment, useContext, useEffect,  } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NoteItem from "./NoteItem";
import NoteContext from "../../context/note/noteContext";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

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
  // if ((notes === null || (notes && notes.length === 0)) && !loading) {
  //   return (
  //     <div>
  //       <h6>Please add a note...</h6>
  //     </div>
  //   );
  // }
// Spinner
const color = "#ffffff";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
        <RingLoader color={color} loading={loading} css={override} size={150} />
      )}
    </Fragment>
  );
}

export default Notes;
