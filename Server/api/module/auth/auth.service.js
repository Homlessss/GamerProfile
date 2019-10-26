const userRepository = require("../users/user.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../../../config");

async function login(data) {
  if (!data.email && !data.password) {
    throw new error("Missing input");
  }
  const existedUser = await userRepository.findByEmail(data.email);
  if (!existedUser) {
    throw new error("Cannot find user!");
  }

  //compare password
  const result = await bcrypt.compare();
  if (result) {
    const tokenData = {
      _id: existedUser._id,
      email: existedUser.email,
      name: existedUser.name,
      phone: existedUser.phone
    };
    const token = await jwt.sign(tokenData, config.secretKey, {
      expiresIn: "2h"
    });
    return token;
  } else {
    throw new error("Wrong password!");
  }
}

async function register(data) {
  if (!data.password && !data.email && !data.phone) {
    throw new error("Missing input!");
  }
  const existedUser = await userRepository.findByEmail(data.email);
  if (existedUser) {
    throw new error("Email existed!");
  }

  const newPassword = await bcrypt.hash(data.password, config.saltRound);
  data.password = newPassword;

  return await userRepository.create(data);
}

async function authentication(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).send("Unauthentication!");
    }
    const data = await jwt.verify(token, config.secretKey);
    if (!data) {
      res.status(401).send("Unauthentication!");
    }
    if (data) {
      if (data.exp <= Date.now() / 1000) {
        res.status(401).send("Token expired!");
      }
    }
    req.user = data;
    next();
  } catch (error) {
    res.status(401).send("Unauthentication!");
  }
}

function authorization(data, roles) {
  if (user && roles.indexOf(user.role) >= 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  login,
  register,
  authentication,
  authorization
};
