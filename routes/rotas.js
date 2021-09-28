const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");

router.get("/index", controller.index);

router.get("/viagem", controller.viagem);

router.get("/teste", controller.teste);

module.exports = router;