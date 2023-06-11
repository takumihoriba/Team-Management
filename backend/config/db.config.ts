module.exports = {
    HOST: "localhost",
    USER: "jtstripes95",
    PASSWORD: "mintuser",
    DB: "testdb",   // the name of the database
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000 // max idle time in milliseconds
    }
};

