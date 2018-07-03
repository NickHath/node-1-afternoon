let messages = [];
let id = 0;
module.exports = {
  read: (req, res) => {
    res.status(200).send(messages);
  },

  create: (req, res) => {
    res.status(200).send(messages);
  },

  update: (req, res) => {
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    res.status(200).send(messages);
  },


};