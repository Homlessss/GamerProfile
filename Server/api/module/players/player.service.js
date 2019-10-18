const repository = require("./player.repository");

const find = async function(query) {
  return await repository.find(query);
};

const findById = async function(id) {
  return await repository.findById(id);
};
const create = async function(data) {
  if (!data.name || !data.team) {
    throw new Error("Missing input");
  }
  return await repository.create(data);
};


const update = async function(id, data) {
  const existedData = await repository.findById(id);
  if (!existedData) {
    throw new Error("Not found");
  }
  return await repository.update(id, data);
};
const deleteOne = async function(id) {
  const existedData = await repository.findById(id);
  if (!existedData) {
    throw new Error("Not found");
  }
  return await repository.delete(id);
};

module.exports = {
  find,
  findById,
  create,
  update,
  delete: deleteOne
};
