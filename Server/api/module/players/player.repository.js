const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  nationality: {
    type: String
  },
  team: {
    type: String,
    require: true
  },
  hightlight: {
    type: String
  },
  image: {
    type: String
  },
  lane: {
    type: String
  }
});

const PlayerModel = mongoose.model("Player", PlayerSchema);

const find = async function(query) {
  return await PlayerModel.find(query);
};
const findById = async function(id) {
  return await PlayerModel.findById(id);
};
const findByName = async function(name) {
  return await PlayerModel.findOne({ name: name });
};
const create = async function(data) {
  const newDoc = new PlayerModel(data);
  return await newDoc.save();
};
const update = async function(id, data) {
  return await PlayerModel.findByIdAndUpdate(id, data, { new: true });
};
const deleteOne = async function(id) {
  return await PlayerModel.findByIdAndDelete(id);
};


module.exports = {
  find,
  findByName: findByName,
  findById,
  create,
  update,
  delete: deleteOne,
};
