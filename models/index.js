"use strict";

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Album = require("./album")(sequelize, Sequelize);
db.Music = require("./music")(sequelize, Sequelize);

db.Album.hasMany(db.Music, { foreignhKey: "Album_id", sourceKey: "id" });
db.Music.belongsTo(db.Album, { foreignhKey: "Album_id", sourceKey: "id" });

module.exports = db;
