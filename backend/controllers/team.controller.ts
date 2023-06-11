const db = require("../models/");
const Team = db.teams;
const Op = db.Sequelize.Op;

// Create and Save a new Team
exports.create = (req: any, res: any) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Team
    const team = {
        name: req.body.name,
        url: req.body.url,
    };

    // Save Team in the database
    Team.create(team)
        .then((data: any) => {
            res.send(data);
        })
        .catch((err: any) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Team."
            });
        });
};

// Retrieve all Teams from the database.
exports.findAll = (req: any, res: any) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

    Team.findAll({ where: condition })
        .then((data: any) => {
            res.send(data);
        })
        .catch((err: any) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving teams."
            });
        });
};

// Find a single Team with an id
exports.findOne = (req: any, res: any) => {
    const id = req.params.id;

    Team.findByPk(id)
        .then((data: any) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Team with id=${id}.`
                });
            }
        })
        .catch((err: any) => {
            res.status(500).send({
                message: "Error retrieving Team with id=" + id
            });
        });
};

// Update a Team by the id in the request
exports.update = (req: any, res: any) => {
    const id = req.params.id;

    Team.update(req.body, {
        where: { id: id }
    })
        .then((num: any) => {
            if (num == 1) {
                res.send({
                    message: "Team was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Team with id=${id}. Maybe Team was not found or req.body is empty!`
                });
            }
        })
        .catch((err: any) => {
            res.status(500).send({
                message: "Error updating Team with id=" + id
            });
        });
};

// Delete a Team with the specified id in the request
exports.delete = (req: any, res: any) => {
    const id = req.params.id;

    Team.destroy({
        where: { id: id }
    })
        .then((num: any) => {
            if (num == 1) {
                res.send({
                    message: "Team was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Team with id=${id}. Maybe Team was not found!`
                });
            }
        })
        .catch((err: any) => {
            res.status(500).send({
                message: "Could not delete Team with id=" + id
            });
        });
};

// Delete all Teams from the database.
exports.deleteAll = (req: any, res: any) => {
    Team.destroy({
        where: {},
        truncate: false
    })
        .then((nums: any) => {
            res.send({ message: `${nums} Teams were deleted successfully!` });
        })
        .catch((err: any) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all teams."
            });
        });
};