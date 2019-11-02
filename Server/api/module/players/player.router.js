const service = require("./player.service");
const express = require("express");
const router = express.Router();
const authService = require("../auth/auth.service");

router.get("/", async function(req, res) {
  try {
    const data = await service.find(req.user, req.query);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.get("/:id", async function(req, res) {
  try {
    const data = await service.findById(req.user, req.params.id);
    res.status(200).send({
      data: data
    });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.post("/",  async function(req, res) {
  try {
    const data = await service.create(req.body);
    res.status(200).send({
      data: data
    });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.put("/:id",  async function(req, res) {
  try {
    const data = await service.update(req.user, req.params.id, req.body);
    res.status(200).send({
      data: data
    });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.delete("/:id",  async function(req, res) {
  try {
    const data = await service.delete(req.user, req.params.id);
    res.status(200).send({
      data: data
    });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

module.exports = router;
