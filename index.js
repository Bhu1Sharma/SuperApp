// This is sample application 
// Create REST endpoint which accepts 2 numbers and returns sum 

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

connection.connect((error) => {
  if (error) {
    console.error('Failed to establish MySQL connection!', error);
    return;
  }
  
  console.log('MySQL connection established successfully!');
});

module.exports = connection;
