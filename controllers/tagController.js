const { JsonDB } = require('json-db-utils');
const db = new JsonDB('myDatabase', true, false, '/');

exports.getAllTags = (req, res) => {
  const tags = db.getData('/tags');
  res.json(tags);
};

exports.getTagById = (req, res) => {
  const tag = db.getData(`/tags[${req.params.id}]`);
  res.json(tag);
};

exports.createTag = (req, res) => {
  const newTag = req.body;
  const id = db.push('/tags[]', newTag);
  res.json({ id, ...newTag });
};

exports.updateTag = (req, res) => {
  const updatedTag = req.body;
  db.push(`/tags[${req.params.id}]`, updatedTag);
  res.json(updatedTag);
};

exports.deleteTag = (req, res) => {
  db.delete(`/tags[${req.params.id}]`);
  res.sendStatus(204);
};
