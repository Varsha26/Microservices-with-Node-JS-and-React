const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
//randomBytes to create random ids for all the posts
const app = express();
app.use(bodyParser.json());
app.use(cors());
const posts = {};// repo to contain all the post requests.
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    //id of random 4 bytes and convert it to string
    const id = randomBytes(4).toString('hex');
    const {title} = req.body;
    posts[id] = {
        id, title
    };
    res.status(202).send(posts[id]);

});

app.listen(4000, () => {
    console.log('Port is working');
})