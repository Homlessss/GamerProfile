const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  name: String,
  description: String,
  nation: String,
  owner: String,
  achievements: String,
  members: [String]
});

const TeamModel = mongoose.model("Team", TeamSchema);

const find = async function(query) {
  return await TeamModel.find(query);
};
const findById = async function(id) {
  return await TeamModel.findById(id);
};
const create = async function(data) {
  const newDoc = new TeamModel(data);
  return await newDoc.save();
};
const update = async function(id, data) {
  return await TeamModel.findByIdAndUpdate(id, data, { new: true });
};
const deleteOne = async function(id) {
  return await TeamModel.findByIdAndDelete(id);
};

module.exports = {
  find,
  findById,
  create,
  update,
  delete: deleteOne
};
