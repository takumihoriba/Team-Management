const dbConfig = require("../config/db.config.ts");
export const db: any = {};
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.teams = require("./team.model.ts")(sequelize, Sequelize);

module.exports = db;