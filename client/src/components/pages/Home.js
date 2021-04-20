import React from "react";
import Jumbotron from "../layout/Jumbotron";
import AddNoteModal from "../modals/AddNoteModal";
import Notes from "../notes/Notes";

function Home() {

  return (
    <div>
      <Jumbotron /> 
      {/* openModal={openModal} /> */}
      <AddNoteModal
        // afterOpenModal={afterOpenModal}
        // closeModal={closeModal}
        // addNoteModalOpen={addNoteModalOpen}
        // setAddNoteModalOpen={setAddNoteModalOpen}
      />
      <div className="container">
        <Notes />
      </div>
    </div>
  );
}

export default Home;
