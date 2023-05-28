import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Application = express();
const PORT = process.env.PORT || 8000;
const mysql = require('mysql2');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'jtstripes95',
  password: 'mintuser',
});

// Connect to the MySQL server
connection.connect((err: any) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

app.get("/", (req: Request, res: Response) => {
  res.send("Working!");
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});