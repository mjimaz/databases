var db = require('../db');

module.exports = {
  messages: {
    get: function (res) {
      db.selectmessages(res);
    }, // a function which produces all the messages
    post: function (messages) {
      db.insert(messages);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {
      db.createuser(user);
    }
  }
};

