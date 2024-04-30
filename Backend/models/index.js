const dbConfig = require("../config/db.js");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  // operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("../models/products-models.js")(sequelize, DataTypes);
db.users = require("../models/user-model.js")(sequelize, DataTypes);
db.categorys = require("../models/category-model.js")(sequelize, DataTypes);

db.products.belongsTo(db.categorys, {
  foreignKey: "CategoryId",
  as: "Category",
});

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = db;
