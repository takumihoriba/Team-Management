import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Application = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());  // allow cross-origin requests

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'jtstripes95',
//   password: 'mintuser',
// });

// // Connect to the MySQL server
// connection.connect((err: any) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database.');
// });

const db = require("../backend/models"); // import the database model
db.sequelize.sync({ force: true }).then(() => { // force: true will drop the table if it already exists
  console.log("Drop and re-sync db.");
});

// simple route
app.get("/", (req: Request, res: Response) => {
  res.send("Working!");
});

// require routes
require("../backend/routes/team.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});