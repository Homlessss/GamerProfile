const service = require("./team.service");
const auth = require("../auth/auth.service");
const express = require("express");
const router = express.Router();

router.get("/", auth.authentication, async function(req, res) {
  try {
    const data = await service.find(req.user, req.query);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.get("/:id", auth.authentication, async function(req, res) {
  try {
    const data = await service.findById(req.user, req.params.id);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.post("/", auth.authentication, async function(req, res) {
  try {
    const data = await service.create(req.user, req.body);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.put("/:id", auth.authentication, async function(req, res) {
  try {
    const data = await service.update(req.user, req.params.id, req.body);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.delete("/:id",  async function(req, res) {
  try {
    const data = await service.delete(req.user, req.params.id);
    res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

module.exports = router;
