const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: "user"
  }
});

const UserModel = mongoose.model("User", UserSchema);

const find = async function(query) {
  return await UserModel.find(query);
};

const findById = async function(id) {
  return await UserModel.findById(id);
};

const create = async function(data) {
  const newDoc = new UserModel(data);
  return await newDoc.save();
};

const update = async function(id, data) {
  return await UserModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteOne = async function(id) {
  return await UserModel.findByIdAndDelete(id);
};

const findByEmail = async function(email) {
  return await UserModel.findOne({ email: email });
};

module.exports = {
  find,
  findById,
  findByEmail,
  create,
  update,
  delete: deleteOne
};
