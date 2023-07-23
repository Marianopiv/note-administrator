import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NotesContainer from "../notesContainer/NotesContainer";
import Anchor from "../../UI/Anchor";
import CategoryFilter from "../categoryFilter/CategoryFilter";
import { GlobalContext } from "../../GlobalProvider/GlobalProvider";

const ArchivedNotes = () => {
  const navigate = useNavigate();
  const {handleFilterNotes} = useContext(GlobalContext)

  // eslint-disable-next-line no-unused-vars
  
  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex flex-col sm:flex-row  items-center gap-10">
        <h1 className="text-5xl font-bold tracking-wider text-green-800">
          Archived Notes
        </h1>{" "}
        <Anchor
          action={() => navigate(-1)}
          text={"ᐸ Go back to unarchived notes"}
        />
      </div>
      <CategoryFilter handleFilterNotes={handleFilterNotes} />
      <NotesContainer archived />
    </div>
  );
};

export default ArchivedNotes;
