const service = require("./player.service");
const express = require("express");
const router = express.Router();

router.get("/", async function(req, res) {
  try {
    const data = await service.find(req.query);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.get("/:id", async function(req, res) {
  try {
    const data = service.findById(req.params.id);
    res.status(200).send({
      data: data
    });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.post("/", async function(req, res) {
  try {
    const data = service.create(req.body);
    res.status(200).send({
      data: data
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
});

router.put("/:id", async function(req, res) {
  try {
    const data = service.update(req.params.id, req.body);
    res.status(200).send({
      data: data
    });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.delete("/:id", async function(req, res) {
  try {
    const data = service.delete(req.params.id);
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
