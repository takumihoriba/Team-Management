module.exports = (app: { use: (arg0: string, arg1: any) => void; }) => {
    const teams = require("../controllers/team.controller.ts");

    var router = require("express").Router();

    // Create a new Team
    router.post("/", teams.create);

    // Retrieve all Teams
    router.get("/", teams.findAll);

    // Retrieve a single Team with id
    router.get("/:id", teams.findOne);

    // Update a Team with id
    router.put("/:id", teams.update);

    // Delete a Team with id
    router.delete("/:id", teams.delete);

    // Delete all Teams
    router.delete("/", teams.deleteAll);

    app.use('/api/team', router);
}