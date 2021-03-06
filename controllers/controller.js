const { comandos } = require("../models");
const axios = require("axios");
const Connection = require("mysql/lib/Connection");


const control = {

    one: (req, res) => {

        res.render("one2");

    },

    one2: (req, res) => {

        res.render("one2");

    },

    qrcode: (req, res) => {

        res.render("qrcode");

    },

    index: (req, res) => {

        res.render("index");

    },

    viagem: (req, res) => {

        res.render("viagem");

    },

    festa: (req, res) => {

        res.render("festa");

    },

    contribua: (req, res) => {

        res.render("contribua");

    },

    postDados: async (req, res) => {

        //Inserir no DynamoDB da AWS

        let { nome, email, telefone, msg } = req.body;

        try {
            console.log("Inserindo Dados na AWS");
            axios({
                method: 'post',
                url: 'https://4bgm2lry4a.execute-api.sa-east-1.amazonaws.com/v1/msg',
                data: {
                    "id": Math.random(),
                    "Nome": nome,
                    "Email": email,
                    "Telefone": telefone,
                    "Mensagem": msg
                },
            }).then(function (response) {

                console.log("Dados Gravados na AWS");

            }

            );

        } catch (erro) {

            console.log("Erro: " + erro);

        }


        //Fim de Inserir no DynamoDB da AWS



    },

    presentes: (req, res) => {

        res.render("presentes");

    },

    padrinhos: (req, res) => {

        res.render("padrinhos");

    },

    //PAINEL
    painel: async (req, res) => {


        const url = "https://4bgm2lry4a.execute-api.sa-east-1.amazonaws.com/v1/msg";

        var nomesData;

        axios.get(url)
            .then(response => {
                var dados = response.data;
                //console.log(Object.values(dados));
                //console.log(Object.keys(dados));
                //console.log(typeof dados);
                //console.log(dados);
                //console.log(dados.Items[1]);

                dados.Items.forEach(element => {

                    nomesData = element['Nome'];

                    console.log("###nomesData: " + nomesData);

                    return res.render("painel", { nomesData });

                });


            }

            )
            .catch(error => console.log(error));


        console.log("###################getUSER: " + nomesData);


        //return res.render("painel", { nomesData });


    },

    //FIM PAINEL

    teste: (req, res) => {

        res.render("one");

    },

    teste2: async (req, res) => {

        let users = await comandos.findAll();

        return res.render("teste2", { users });

    },

    teste3: (req, res) => {

        res.render("teste3");

    }

}

module.exports = control;