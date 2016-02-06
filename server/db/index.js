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
 
module.exports.insert = function(messages) {
  var username = messages.username;
  var message = messages.text;
  var room = messages.roomname;

  connection.connect();

  // !! insert using SET for OBJ or [] with corresponding ?
 
  connection.query('INSERT into messages (userid, username, message, roomname) VALUES (1, "' + username + '", "' + message + '", "' + room + '");', function(err) {
    if (err) { throw err; }
    console.log('success insertion');
  });
 
  connection.end();
};