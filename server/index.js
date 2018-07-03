const express = require('express')
    , bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// server-side rendering of front end code
app.use(express.static(__dirname + '/../public/build'));

const messagesController = require('./controllers/messages_countroller');
app.get(`/api/messages`, messagesController.read);
app.post(`/api/messages`, messagesController.create);
app.put(`/api/messages/:id`, messagesController.update);
app.delete(`/api/messages/:id`, messagesController.delete);

const port = 3000;
app.listen(port, () => console.log(`I'm listening... on port ${port}`));