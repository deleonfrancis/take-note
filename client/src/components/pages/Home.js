import React, { useState } from "react";
import Jumbotron from '../layout/Jumbotron'
import AddNoteModal from '../modals/AddNoteModal'

function Home() {
      // for add note modal
  const [addNoteModalOpen, setAddNoteModalOpen] = useState(false);

  function openModal() {
    setAddNoteModalOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setAddNoteModalOpen(false);
  }

  return (
    <div>
      <Jumbotron openModal={openModal} />
      <AddNoteModal
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        addNoteModalOpen={addNoteModalOpen}
        setAddNoteModalOpen={setAddNoteModalOpen}
      />
    </div>
  );
}

export default Home;
