const repository = require("./player.repository");
const authService = require("../auth/auth.service");

const find = async function(query) {
  let auth = authService.authorization(user, ["admin", "user"]);
  if (auth) {
    return await repository.find(query);
  } else {
    throw new error("Unauthorized!");
  }
};

const findById = async function(id) {
  let auth = authService.authorization(user, ["admin", "user"]);
  if (auth) {
    return await repository.findById(id);
  } else {
    throw new error("Unauthorized!");
  }
};

const create = async function(data) {
  let auth = authService.authorization(user, ["admin"]);
  if (auth) {
    if (!data.name || !data.team) {
      throw new Error("Missing input");
    } else {
      return await repository.create(data);
    }
  } else {
    throw new error("Unauthorized!");
  }
};

const update = async function(id, data) {
  const existedData = await repository.findById(id);
  let auth = authService.authorization(user, ["admin"]);
  if (auth) {
    if (!existedData) {
      throw new Error("Not found");
    } else {
      return await repository.update(id, data);
    }
  } else {
    throw new error("Unauthorized!");
  }
};
const deleteOne = async function(id) {
  const existedData = await repository.findById(id);
  let auth = authService.authorization(user, ["admin"]);
  if (auth) {
    if (!existedData) {
      throw new Error("Not found");
    } else {
      return await repository.delete(id);
    }
  } else {
    throw new error("Unauthorized!");
  }
};

module.exports = {
  find,
  findById,
  create,
  update,
  delete: deleteOne
};
