const {Op,Model, DataTypes, Sequelize} = require('sequelize');
const sequelize = new Sequelize(url.db);

const table = sequelize.define('table',{
    id:DataTypes.STRING,
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize,
    tableName:"table",
    timestamps:false
});
//Lib
class MyModel{
    getData=(data)=>{
        return table.findOne({
            where:data
        },{
            sequelize,
        })
    }
}
module.exports = MyModel;
