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

    teste: (req, res)=>{

        res.render("teste");

    }

}

module.exports = control;