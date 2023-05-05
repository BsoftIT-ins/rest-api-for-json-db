const { JsonDB } = require('json-db-utils');
const db = new JsonDB('myDatabase', true, false, '/');

exports.getAllCustomers = (req, res) => {
  const customers = db.getData('/customers');
  res.json(customers);
};

exports.getCustomerById = (req, res) => {
  const customer = db.getData(`/customers[${req.params.id}]`);
  res.json(customer);
};

exports.createCustomer = (req, res) => {
  const newCustomer = req.body;
  const id = db.push('/customers[]', newCustomer);
  res.json({ id, ...newCustomer });
};

exports.updateCustomer = (req, res) => {
  const updatedCustomer = req.body;
  db.push(`/customers[${req.params.id}]`, updatedCustomer);
  res.json(updatedCustomer);
};

exports.deleteCustomer = (req, res) => {
  db.delete(`/customers[${req.params.id}]`);
  res.sendStatus(204);
};
