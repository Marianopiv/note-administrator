const express = require('express')
const { getNotes, createNewNote, deleteExistingNote, updateCurrentNote, getAllArchivedNotes } = require('../controllers/notes.js')
const { getAllCategories, createNewCategory, deleteExistingCategory } = require('../controllers/categories.js')
const router = express.Router()

router.get('/prueba', (req,res)=> {
    return res.status(200).send("Hello, funcionó")
})

router.get('/notes',getNotes)

router.get('/notes-archived/',getAllArchivedNotes)

router.post('/note',createNewNote)

router.delete('/note/:id',deleteExistingNote)

router.put('/note/:id',updateCurrentNote)

router.get('/categories',getAllCategories)

router.post('/category',createNewCategory)

router.delete('/category/:id',deleteExistingCategory)

module.exports = router