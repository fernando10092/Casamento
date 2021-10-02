const {comandos} = require("../models");

const control = {

    index: (req, res)=>{

        res.render("index");

    },

    viagem: (req, res)=>{

        res.render("viagem");

    },

    festa: (req, res)=>{

        res.render("festa");

    },

    contribua: (req, res)=>{

        res.render("contribua");

    },

    presentes: (req, res)=>{

        res.render("presentes");

    },

    contato: (req, res)=>{

        res.render("contato");

    },

    teste: (req, res)=>{

        res.render("teste");

    },

    teste2: async (req, res)=>{

        let users = await comandos.findAll();

        return res.render("teste2", {users});

    }

}

module.exports = control;