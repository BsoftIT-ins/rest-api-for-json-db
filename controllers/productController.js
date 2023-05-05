const { JsonDB } = require('json-db-utils');
const db = new JsonDB('myDatabase', true, false, '/');

exports.getAllProducts = (req, res) => {
  const products = db.getData('/products');
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = db.getData(`/products[${req.params.id}]`);
  res.json(product);
};

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  const id = db.push('/products[]', newProduct);
  res.json({ id, ...newProduct });
};

exports.updateProduct = (req, res) => {
  const updatedProduct = req.body;
  db.push(`/products[${req.params.id}]`, updatedProduct);
  res.json(updatedProduct);
};

exports.deleteProduct = (req, res) => {
  db.delete(`/products[${req.params.id}]`);
  res.sendStatus(204);
};
