const { Notes } = require("../models");

const getAllNotes = async () => {
  return await Notes.findAll();
};

const createNote = async (note) => {
  const result = await Notes.build({ ...note });
  await result.save();
  return result;
};

const deleteNote = async (id) => {
  const result = await Notes.destroy({ where: { id } });
  return result
};

const updateNote = async (id, updatedNote) => {
  const result = await Notes.update(updatedNote, { where: { id } });
  return result;
};

const getAllArchived = async (id) => {
  return await Notes.findAll({where:{archived:true}})
}
;

module.exports = {
  getAllNotes,
  getAllArchived,
  createNote,
  deleteNote,
  updateNote,
};
