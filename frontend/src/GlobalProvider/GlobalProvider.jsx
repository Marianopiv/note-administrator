import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  ConfirmPopup,
  Toast,
  handleError,
  handleErrorCategory,
  handleErrorFetch,
} from "../UI/Alert";
import {
  createCategory,
  createNote,
  deleteCategory,
  deleteNote,
  getCategories,
  getNotes,
  updateNote,
} from "../axiosClient/axiosClient";
import { useLocation, useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCat, setChosenCat] = useState("");

  const navigate = useNavigate();

  const fetchNotes = async () => {
    try {
      const result = await getNotes();
      setNotes(result.data.notes);
    } catch (error) {
      handleErrorFetch(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const result = await getCategories();
      setCategories(result.data.categories);
    } catch (error) {
      handleErrorFetch(error);
    }
  };

  const removeNote = async (chosenId, title) => {
    ConfirmPopup(title)
      .fire()
      .then(async (result) => {
        if (result.isConfirmed) {
          await deleteNote(chosenId);
          setNotes(notes.filter((item) => item.id !== chosenId));
          Swal.fire("Deleted!", "Your Note has been deleted.", "success");
        }
      });
  };

  const archive = async (note) => {
    let found = notes.find((item) => item.title === note.title);
    found = { ...found, archived: found.archived === true ? false : true };
    await updateNote(found, note.id);
    Toast.fire({
      icon: "success",
      title: `Note ${found.archived ? "archived" : "unarchived"} successfully`,
    });
    fetchNotes();
  };

  const update = async (edited) => {
    await updateNote(edited, edited.id);
    fetchNotes();
    Toast.fire({
      icon: "success",
      title: "Note modified successfully",
    });
  };

  const createNewNote = async (note) => {
    try {
      const resultado = await createNote(note);
      setNotes([...notes, resultado.data.note]);
      Toast.fire({
        icon: "success",
        title: "Note created successfully",
      });
    } catch (error) {
      handleError(error).fire();
    }
  };

  const createNewCategory = async (category) => {
    try {
      const resultado = await createCategory(category);
      console.log(resultado);
      setCategories([...categories, resultado.data.category]);
      Toast.fire({
        icon: "success",
        title: "Category created successfully",
      });
    } catch (error) {
      handleErrorCategory(error).fire();
    }
  };

  const removeCategory = async (category) => {
    await ConfirmPopup(category.title)
      .fire()
      .then(async (result) => {
        if (result.isConfirmed) {
          await deleteCategory(category.id);

          fetchCategories();
          Swal.fire("Deleted!", "Your Category has been deleted.", "success");
        }
      });
  };

  const { pathname } = useLocation();
  
  let splitted = pathname.split("/");

  const handleFilterNotes = (filter) => {
    if (!filter) {
      if (pathname !== "/archived-notes") {
        navigate("/");
      }
    } else {
      navigate("/archived-notes");
    }
    if (splitted[1] === "archived-notes") {
      navigate(`/archived-notes/${filter}`);
    } else {
      navigate(`/${filter}`);
    }
  };

  useEffect(() => {
    fetchNotes();
    fetchCategories();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        categories,
        notes,
        chosenCat,
        setChosenCat,
        setNotes,
        removeNote,
        archive,
        update,
        createNewNote,
        createNewCategory,
        handleFilterNotes,
        removeCategory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
