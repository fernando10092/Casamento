module.exports = (sequelize, DataType)=>{
    const Criar = sequelize.define("comandos", {

        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        NomeTB: {
            type: DataType.STRING,
            allowNull: true
        },

        idadeTB: {
            type: DataType.INTEGER
        }

    },

    {
        tableName: "TableTeste",
        timestamps: false
    }

    )

    return Criar
}