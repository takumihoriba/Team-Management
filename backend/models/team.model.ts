module.exports = (sequelize: any, Sequelize: any) => {
    const Team = sequelize.define("team", {
        name: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
    });
    return Team;
};