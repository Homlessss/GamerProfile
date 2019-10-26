const service = require("./player.service");
const express = require("express");
const router = express.Router();
const authService = require("../auth/auth.service");

router.get("/", authService.authentication, async function(req, res) {
  try {
    const data = await service.find(req.user, req.query);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({
      error: error.message
    });
  }
});

router.get("/:id",authService.authentication, async function(req, res) {
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

router.post("/",authService.authentication, async function(req, res) {
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

router.put("/:id",authService.authentication, async function(req, res) {
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

router.delete("/:id",authService.authentication, async function(req, res) {
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
