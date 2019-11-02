const repository = require("./team.repository");
const authService = require("../auth/auth.service");

const find = async function(user, query) {
  let auth = authService.authorization(user, ["admin", "user"]);
  if (auth) {
    return await repository.find(query);
  } else {
    throw new Error("Unauthorized!");
  }
};

const findById = async function(user, id) {
  let auth = authService.authorization(user, ["admin", "user"]);
  if (auth) {
    return await repository.findById(id);
  } else {
    throw new Error("Unauthorized!");
  }
};

const create = async function(user, data) {
  let auth = authService.authorization(user, ["admin"]);
  if (auth) {
    if (!data.name && !data.nation) {
      throw new Error("Missing input!");
    } else {
      return await repository.create(data);
    }
  } else {
    throw new Error("Unauthorized!");
  }
};

const update = async function(user, id, data) {
  let auth = authService.authorization(user, ["admin"]);
  const existedData = repository.findById(id);
  if (auth) {
    if (!existedData) {
      throw new Error("Not found!");
    } else {
      return await repository.update(id, data);
    }
  } else {
    throw new Error("Unauthorized!");
  }
};

const deleteOne = async function(user, id) {
  // let auth = authService.authorization(user, ["admin"]);
  const existedData = repository.findById(id);
  // if (auth) {
    
  // } else {
  //   throw new Error("Unauthorized!");
  // }
  if (!existedData) {
    throw new Error("Not found!");
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
