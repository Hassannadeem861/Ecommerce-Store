const { DataTypes } = require('sequelize');

const authenticationModel = (sequelize) => {
    const userModel = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false, // Name should be required
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, // Email should be required
            unique: true, // Email should be unique
            // validate: {
            //     isEmail: true, // Validate email format
            // },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false, // Password should be required
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false, // Password should be required
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user", // Set default role to "user"
        },
    });

    return userModel;
};

module.exports = authenticationModel;
