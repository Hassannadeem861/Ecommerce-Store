const { DataTypes, Sequelize } = require("sequelize");
const realatioCategory = require("../models/category-model"); // Category ko import karo

const ProductsDetails = (sequelize) => {
  const ProductModel = sequelize.define("product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "name is required.",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "description is required.",
        },
      },
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "price is required.",
        },
      },
      defaultValue: 0,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "category is required.",
        },
      },
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "quantity is required.",
        },
      },
    },

    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "quantity is brand.",
        },
      },
    },

    inStock: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: {
          msg: "quantity is inStock.",
        },
      },
    },

    shipping: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // ProductModel.belongsTo(realatioCategory, {
  //   foreignKey: "categoryId",
  //   // as: "tutorial",
  // }); // Maan lo ke categoryId foreign key hai

  return ProductModel;
};

module.exports = ProductsDetails;
