const express = require("express");

const router = express.Router();

const controller = require("../controllers/controller");

router.get("/", controller.one);

router.get("/viagem", controller.viagem);

router.get("/festa", controller.festa);

router.get("/contribua", controller.contribua);

router.post("/contribua", controller.postDados);

router.get("/presentes", controller.presentes);

router.get("/padrinhos", controller.padrinhos);

router.get("/painel", controller.painel);

router.get("/one2", controller.one2);

router.get("/qrcode", controller.qrcode);

router.get("/teste2", controller.teste2);

router.get("/teste3", controller.teste3);

module.exports = router;