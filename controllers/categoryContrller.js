const { JsonDB } = require('json-db-utils');
const db = new JsonDB('myDatabase', true, false, '/');

exports.getAllCategories = (req, res) => {
  const categories = db.getData('/categories');
  res.json(categories);
};

exports.getCategoryById = (req, res) => {
  const category = db.getData(`/categories[${req.params.id}]`);
  res.json(category);
};

exports.createCategory = (req, res) => {
  const newCategory = req.body;
  const id = db.push('/categories[]', newCategory);
  res.json({ id, ...newCategory });
};

exports.updateCategory = (req, res) => {
  const updatedCategory = req.body;
  db.push(`/categories[${req.params.id}]`, updatedCategory);
  res.json(updatedCategory);
};

exports.deleteCategory = (req, res) => {
  db.delete(`/categories[${req.params.id}]`);
  res.sendStatus(204);
};
