const mysql = require('mysql2');
const readline = require('readline');
require('dotenv').config();

// Create a readline interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt the user for database name and folder
rl.question('Enter the database name: ', (dbName) => {
  rl.question('Enter the folder for the database: ', (dbFolder) => {
    rl.close();

    // Create a MySQL connection
    const connection = mysql.createConnection({
      host: 'localhost',
      user: process.env.USER,    // Enter your MySQL username
      password: process.env.PASSWD,    // Enter your MySQL password
      port: process.env.PORT,   // Port number for MySQL
    });

    // Connect to the MySQL server
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to the database:', err);
        return;
      }
      console.log('Connected to the database.');

      // Create the database
      connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`, (err) => {
        if (err) {
          console.error('Error creating database:', err);
          connection.end();
          return;
        }

        console.log('Database created successfully.');

        // Switch to the created database
        connection.query(`USE \`${dbName}\``, (err) => {
          if (err) {
            console.error('Error switching to the database:', err);
            connection.end();
            return;
          }

          console.log('Using database:', dbName);

          // Create a table to store team information
          const createTableQuery = `CREATE TABLE IF NOT EXISTS teams (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            url VARCHAR(255)
          )`;

          connection.query(createTableQuery, (err) => {
            if (err) {
              console.error('Error creating table:', err);
              connection.end();
              return;
            }

            console.log('Table created successfully.');

            // Function to insert a new team into the database
            function insertTeam(name, url) {
              const insertQuery = 'INSERT INTO teams (name, url) VALUES (?, ?)';
              connection.query(insertQuery, [name, url], (err, results) => {
                if (err) {
                  console.error('Error inserting team:', err);
                } else {
                  console.log(`New team with id ${results.insertId} inserted into the database.`);
                }
                connection.end();
              });
            }

            // Usage example:
            const teamName = 'My Team';
            const teamUrl = 'https://example.com/my-team';

            insertTeam(teamName, teamUrl);
          });
        });
      });
    });
  });
});
