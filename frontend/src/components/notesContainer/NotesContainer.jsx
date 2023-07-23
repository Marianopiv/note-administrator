import React from "react";
import Note from "../note/Note";
import { GlobalContext } from "../../GlobalProvider/GlobalProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const NotesContainer = ({ archived }) => {
  const { category } = useParams();
  const { notes } = useContext(GlobalContext);

  const filtered = category
    ? notes.filter((item) => item.category === category && !item.archived)
    : notes.filter((item) => !item.archived);

  const archivedFilter = category
    ? notes.filter((item) => item.category === category && item.archived)
    : notes.filter((item) => item.archived);

  if (archived) {
    return (
      <div className="w-screen flex gap-4 flex-wrap">
        {archivedFilter.length > 0 ? (
          archivedFilter.map((item, index) => (
            <Note key={index} item={item} archived={archived} />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    );
  }
  return (
    <div className="w-screen flex gap-4 flex-wrap">
      {filtered.length > 0 ? (
        filtered
          .filter((item) => !item.archived)
          .map((item, index) => (
            <Note key={index} item={item} archived={archived} />
          ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default NotesContainer;
