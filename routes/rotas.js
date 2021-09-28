const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");

router.get("/index", controller.index);

router.get("/viagem", controller.viagem);

router.get("/festa", controller.festa);

router.get("/contribua", controller.contribua);

router.get("/presentes", controller.presentes);

router.get("/teste", controller.teste);

module.exports = router;