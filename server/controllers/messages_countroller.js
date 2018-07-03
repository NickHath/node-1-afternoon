let messages = [];
let id = 0;
module.exports = {
  read: (req, res) => {
    res.status(200).send(messages);
  },

  create: (req, res) => {
    const { text, time } = req.body;
    let newMessage = { id, text, time };
    id++;

    messages.push(newMessage);
    res.status(200).send(messages);
  },

  update: (req, res) => {
    let eltIndex = null;
    messages.forEach((message, index) => {
      if (message.id === parseInt(req.params.id)) {
        eltIndex = index;
      }
    });
    if (eltIndex !== null) {
      messages[eltIndex] = Object.assign(messages[eltIndex], req.body);
    }
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    let eltIndex = null;
    messages.forEach((message, index) => {
      if (message.id === parseInt(req.params.id)) {
        eltIndex = index;
      }
    });
    if (eltIndex !== null) {
      messages.splice(eltIndex, 1);
    }
    res.status(200).send(messages);
  },


};