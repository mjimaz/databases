var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// insert into messages table in chat database

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'lowsamaht',
  database : 'chat'
});
 
module.exports.insert = function() {
  connection.connect();
 
  connection.query('DESCRIBE messages', function(err, rows) {
    if (err) { throw err };
    console.log('USERS: ', rows[0]);
  });
 
  connection.end();
};