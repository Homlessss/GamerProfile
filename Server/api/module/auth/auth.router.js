const service = require("./auth.service");
const express = require("express");
const router = express.Router();

router.post("/register", async function(req, res) {
  try {
    const data = await service.register(req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.post("/login", async function(req, res) {
  try {
    const data = await service.login(req.body);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      error: console.log(data)
    });
  }
});

module.exports = router;
