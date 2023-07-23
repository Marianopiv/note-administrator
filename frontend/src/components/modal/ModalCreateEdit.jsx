import React, { useContext } from "react";
import Button from "../../UI/Button";
import { GlobalContext } from "../../GlobalProvider/GlobalProvider";
import useAdd from "../../hook/useAdd";
import { AiFillTag } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const ModalCreateEdit = ({ setModal, edit, setEdit }) => {
  const {
    categories,
    update,
    createNewNote,
    createNewCategory,
    removeCategory,
  } = useContext(GlobalContext);
  const { addNoteInfo, addCategory, add, category } = useAdd();
  const handleEdit = (e) => {
    const { name, value } = e.target;
    if (name===category) {
      setEdit({
          ...edit,
            category:value
        })
  }
    setEdit({ ...edit, [name]: value });
  };

  const handleFunctionAndClose  = async (edited, add) => {
    edited ? await update(edited) : await createNewNote(add);
    setModal(false);
  };

  return (
    <div className="bg-white border border-black w-screen  md:w-1/2 h-4/5 absolute md:left-1/4 p-5 rounded-md top-24 z-50">
      <h1 className="text-3xl sm:text-5xl">Create/Edit note</h1>
      <div className="p-10 flex flex-col gap-10">
        <div className="flex items-center gap-4">
          <span className="w-1/3">Title</span>
          <input
            name="title"
            onChange={edit ? handleEdit : addNoteInfo}
            className="border w-2/3 rounded-sm p-2 border-black"
            placeholder="Random note's name"
            type="text"
            defaultValue={edit?.title}
          />
        </div>
        <div className="flex gap-4">
          <span className="w-1/3 pt-2">Content</span>
          <textarea
            name="content"
            onChange={edit ? handleEdit : addNoteInfo}
            className="border w-2/3 h-40 rounded-sm p-2 border-black"
            placeholder="an epic explanation of the content of the note"
            type="text"
            defaultValue={edit?.content}
          />
        </div>
        <div className="flex gap-4">
          <span className="w-1/3 pt-2">Categories</span>
          <div
            className="border w-2/3 h-40 rounded-sm p-2 border-black overflow-y-scroll"
            placeholder="an epic explanation of the content of the note"
            type="text"
          >
            {categories.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <AiFillTag className="-rotate-90 text-3xl" />
                <p
                  onClick={edit?(e)=>handleEdit(e, (edit.category=item.title)):(e) => addNoteInfo(e, (add.category = item.title))}
                  value={item.title}
                  className={`text-left capitalize hover:cursor-pointer ${
                    item.title === add.category||item.title ===edit?.category ? "text-green-500" : ""
                  }`}
                >
                  {item.title}
                </p>
                <ImCross
                  className="hover:cursor-pointer hover:text-red-500"
                  onClick={() => removeCategory(item)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 justify-end">
          <input
            onChange={addCategory}
            className="border w-2/3 border-black rounded-sm"
            type="text"
          />
          <Button
            action={() => createNewCategory({ title: category })}
            text={"Add"}
          />
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button action={() => setModal(false)} text={"Cancel"} />
        {edit ? (
          <Button
            action={() => handleFunctionAndClose(edit, add)}
            text={"Modify"}
          />
        ) : (
          <Button
            action={() => handleFunctionAndClose(edit, add)}
            text={"Save"}
          />
        )}
      </div>
    </div>
  );
};

export default ModalCreateEdit;
