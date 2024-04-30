const { DataTypes } = require("sequelize");

const category = (sequelize) => {
  const categoryModel = sequelize.define("category", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Category is required.",
        },
      },
    },
    // slugify: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   set(value) {
    //     this.setDataValue("slugify", value.toLowerCase()); // Convert value to lowercase before saving
    //   },
    // },
  });

  return categoryModel;
};

module.exports = category;
