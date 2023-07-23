const { getAllNotes, createNote, deleteNote, updateNote, getAllArchived } = require("../services/notes.service.js");

const getNotes = async (req, res) => {
  try {
    const notes = await getAllNotes();
    console.log(notes);
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewNote = async (req, res) => {
    const body = req.body
    try {
        const note = await createNote(body)
        res.status(200).json({ note })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteExistingNote = async (req, res) => {
    const id = req.params.id
        try {
            const note = await deleteNote(Number(id))
            res.status(200).json({ note,message:"Note successfully deleted" })
        } catch (error) {
            res.status(500).json({error:error.message})
        }
}

const updateCurrentNote = async (req, res) => {
    const id = req.params.id
    const body = req.body
    try {
        const note = await updateNote(Number(id), body)
        res.status(200).json({ note,message:"Note successfully updated" })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const getAllArchivedNotes = async (req, res) => {
    try {
        const notes = await getAllArchived()
        res.status(200).json({ notes })
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = {
  getNotes,
  getAllArchivedNotes,
  createNewNote,
  updateCurrentNote,
  deleteExistingNote
};
