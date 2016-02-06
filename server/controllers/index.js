var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database
      //save message from request.
      //call models.post(message);
      console.log('message: ', req.body);
      res.send(req.body);
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

