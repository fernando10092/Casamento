const {comandos} = require("../models");
const axios = require("axios");

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

    postDados: async (req, res)=>{

        //Inserindo no DynamoDB da AWS

        let {nome, telefone, msg} = req.body;
    
        axios({
            method: 'post',
            url: 'https://4bgm2lry4a.execute-api.sa-east-1.amazonaws.com/v1/msg',
            data: {
                "id": 1,
                "Nome": nome,
                "Telefone": telefone,
                "Mensagem": msg
            }
          });

          //Fim de Inserindo no DynamoDB da AWS

        

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