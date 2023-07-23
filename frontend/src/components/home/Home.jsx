import React, { useContext, useState } from "react";
import NotesContainer from "../notesContainer/NotesContainer";
import { useNavigate } from "react-router-dom";
import Anchor from "../../UI/Anchor";
import Button from "../../UI/Button";
import ModalCreateEdit from "../modal/ModalCreateEdit";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import { GlobalContext } from "../../GlobalProvider/GlobalProvider";

const Home = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const {handleFilterNotes} = useContext(GlobalContext)

  return (
    <>
      {modal && <ModalCreateEdit setModal={setModal} />}
      <div className={`p-10 flex flex-col gap-10 ${modal ? "opacity-30" : ""}`}>
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <h1 className="text-5xl font-bold tracking-wider text-green-800">
            My Notes
          </h1>{" "}
          <Button action={() => setModal(true)} text={"Create Note"} />
          <Anchor
            action={() => navigate("/archived-notes")}
            text={"Archived notes"}
          />{" "}
        </div>
        <CategoryFilter handleFilterNotes={handleFilterNotes} />
        <NotesContainer />
      </div>
    </>
  );
};

export default Home;
