const express = require('express');
const {randomBytes} = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors'); 
//randomBytes to create random ids for all the posts
const app = express();
app.use(bodyParser.json());
app.use(cors());
const commentsByPostId = {};// repo to contain all the post requests.
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    //id of random 4 bytes and convert it to string
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    comments.push({id: commentId , content});
    commentsByPostId[req.params.id] = comments;
    res.status(202).send(comments);

});

app.listen(4001, () => {
    console.log('Port is working');
})