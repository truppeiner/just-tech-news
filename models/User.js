const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model 
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // TABLE COLUMN DEFINITIONS HERE
        id: {
            //use special sequelize datatype object provides what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's 'not null' option
            allowNull: false,
            //instructs that this is primary key
            primaryKey: true,
            //turn on auto increment 
            autoIncrement: true
        },
        //define a user column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //define an email column
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //there cannot be any duplicate email values in this table
            unique: true,
            // if allowNull is set to false, we can run our data through validators before creating the table data
            validate : {
                isEmail: true
            }
        },
        // define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means the password must be four characters long
                len:[4]
            }
        }
    },
    {
        // TABLE CONFIG OPTIONS GO HERE 

        // pass in our imported sequelize connection (direct connection)
        sequelize,
        // dont automatically create createdAT/updatedAt timestamp fields
        timestamps: false,

        //dont pluraize name of database table
        freezeTableName: true,

        //user underscores instead of camel-casing
        underscored: true,

        //make it so our model name stays lowercase in database
        modelName: 'user'
    }
);

module.exports = User;