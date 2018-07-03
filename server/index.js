const express = require('express')
    , bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const messagesController = require('./controllers/messages_countroller');
app.get(`/api/messages`, messagesController.read);

const port = 3000;
app.listen(port, () => console.log(`I'm listening... on port ${port}`));