import {QueryInterface, DataTypes} from "sequelize";
module.exports = {
 up: async (queryinterface: QueryInterface) => {
    await queryinterface.addColumn("Users", "status",{
        type: DataTypes.ENUM,
        values: ["Ativo" , "Inativo"],
        allowNull: false,
        defaultValue: "Ativo",
        });
     },
    down: async (queryinterface: QueryInterface) => {
    await queryinterface.removeColumn("Users","status");
    }
};