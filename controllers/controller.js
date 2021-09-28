const control = {

    index: (req, res)=>{

        res.render("index");

    },

    viagem: (req, res)=>{

        res.render("viagem");

    },

    teste: (req, res)=>{

        res.render("teste");

    }

}

module.exports = control;