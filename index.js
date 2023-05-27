const {credentials} = require('./config');

const mysql = require('mysql');

const connection = mysql.createConnection({
    ...credetntials  
});

connection.connect((error) => {
  if (error) {
    console.error('Failed to establish MySQL connection!', error);
    return;
  }
  
  console.log('MySQL connection established successfully!');
});

module.exports = connection;
