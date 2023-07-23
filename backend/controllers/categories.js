const {getCategories, createCategory, deleteCategory} = require("../services/categories.service.js")

const getAllCategories = async (req,res) => {
    try {
        const categories = await getCategories();
        console.log(categories)
        res.status(200).json({categories})
    } catch (error) {
        res.status(500).json({error:error.message})        
    }
}

const createNewCategory = async (req, res) => {
    try {
        const body = req.body;
        const category = await createCategory(body);
        res.status(201).json({category})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const deleteExistingCategory = async (req, res) => {
    const id = req.params.id
    try {
        const category = await deleteCategory(Number(id))
        res.status(200).json({category,message:"category deleted successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


module.exports = {
    createNewCategory,
    deleteExistingCategory,
    getAllCategories
}