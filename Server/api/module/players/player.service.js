const repository = require("./player.repository");
const authService = require("../auth/auth.service");

const find = async function(user, query) {
  return await repository.find(query);
};

const findById = async function(user, id) {
  return await repository.findById(id);
};

const create = async function(data) {
  // let auth = authService.authorization(user, ["admin"]);
  // if (auth) {

  // } else {
  //   throw new Error("Unauthorized!");
  // }
  if (!data.name || !data.team) {
    throw new Error("Missing input");
  } else {
    return await repository.create(data);
  }
};

const update = async function(user, id, data) {
  let auth = authService.authorization(user, ["admin"]);
  const existedData = await repository.findById(id);
  if (auth) {
    if (!existedData) {
      throw new Error("Not found");
    } else {
      return await repository.update(id, data);
    }
  } else {
    throw new Error("Unauthorized!");
  }

  // const existedData = await repository.findById(id);
  // if (!existedData) {
  //   throw new Error("Not found");
  // } else {
  //   return await repository.update(id, data);
  // }
};
const deleteOne = async function(user, id) {
  const existedData = await repository.findById(id);
  // let auth = authService.authorization(user, ["admin"]);
  // if (auth) {
  //   if (!existedData) {
  //     throw new Error("Not found");
  //   } else {
  //     return await repository.delete(id);
  //   }
  // } else {
  //   throw new Error("Unauthorized!");
  // }

  if (!existedData) {
    throw new Error("Not found");
  } else {
    return await repository.delete(id);
  }
};

module.exports = {
  find,
  findById,
  create,
  update,
  delete: deleteOne
};
