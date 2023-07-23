import React, { useState } from "react";
import { FaArchive, FaStickyNote } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { LuArchiveRestore } from "react-icons/lu";
import { useContext } from "react";
import { GlobalContext } from "../../GlobalProvider/GlobalProvider";
import ModalCreateEdit from "../modal/ModalCreateEdit";
import { formatDate } from "../../helper";
const Note = ({ item, archived }) => {
  const {title,category,updatedAt,id} = item
  const { removeNote, archive } = useContext(GlobalContext);
  const [edit, setEdit ] = useState();
  const [modal, setModal] = useState(false);

  const handleEdit = (note) => {
    setEdit(note)
    setModal(true)
  }

  return (
    <>
      {modal && <ModalCreateEdit setEdit={setEdit} edit={edit} setModal={setModal} />}
      <div className="flex justify-between gap-4 w-80 lg:w-2/5 h-32 lg:h-28 border border-black rounded-md p-2 relative">
        <div className="text-left flex gap-2 justify-center">
          <FaStickyNote className="text-8xl" />
          <div className="">
            <p className="font-bold capitalize text-md w-screen md:w-auto">{title}</p>
            <p className="text-xs lg:text-md">Last edited {formatDate(updatedAt)}</p>
            <p className="text-xs lg:text-md">Category: {category}</p>
          </div>
        </div>
        <div className="absolute right-2 bottom-2 flex justify-end items-end gap-4">
          {archived ? (
            <LuArchiveRestore
              onClick={() => archive(item)}
              className="lg:text-4xl hover:cursor-pointer hover:text-green-500"
            />
          ) : (
            <FaArchive
              onClick={() => archive(item)}
              className="text-2xl lg:text-4xl hover:cursor-pointer hover:text-green-500"
            />
          )}
          <BsPencilFill onClick={()=>handleEdit(item)}  className="text-2xl lg:text-4xl hover:cursor-pointer hover:text-green-500" />
          <ImBin
            onClick={() => removeNote(id,title)}
            className="text-2xl lg:text-4xl hover:cursor-pointer hover:text-green-500"
          />
        </div>
      </div>
    </>
  );
};

export default Note;
