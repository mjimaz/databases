var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


// insert into messages table in chat database

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123',
  database : 'chat'
});
 
module.exports = {

  connection: connection,

  createuser: function(user) {
    var username = user.username;
    connection.query('INSERT into users (username) values (?)', [username]);
  },

  insert: function(messages) {
    console.log('calling insert');
    var username = messages.username;
    var message = messages.message;
    var room = messages.roomname;

    // !! insert using SET for OBJ or [] with corresponding ?
    connection.query('SELECT userid from users where username = ?;', [username], function(err, rows){
      if(err) { throw err; }
      var temp = rows[0]['userid'];
      var query = 'INSERT into messages (userid, message, roomname) VALUES ('+temp+', "'+message+'", "'+room+'");';
      connection.query(query, function(err) {
        if (err) { throw err; }
        console.log('success insertion');
      });
    });
  
  },

  
};