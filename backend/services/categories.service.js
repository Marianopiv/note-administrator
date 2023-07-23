const { Categories } = require("../models");

const getCategories = async () => {
  return await Categories.findAll();
};

const createCategory = async (category) => {
  const result = await Categories.build({ ...category });
  await result.save();
  return result;
};

const deleteCategory = async (id) => {
  const result = await Categories.destroy({ where: { id } });
  return result;
};

module.exports = {
  createCategory,
  getCategories,
  deleteCategory
};
