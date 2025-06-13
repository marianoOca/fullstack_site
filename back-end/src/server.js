import express from 'express';

const articleInfo = [
    { name: 'eternauta', upvotes: 0},
    { name: 'amigos', upvotes: 0},
    { name: 'socialismo', upvotes: 0},
]

const app = express();

app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articleInfo.find(a =>a.name === req.params.name);
    article.upvotes += 1;

    res.send('Success! The article ' + req.params.name + ' now has ' + article.upvotes + ' upvotes!');
});

app.listen(8000, function() {
    console.log('Server is listening on port 8000');
});



/* Examples of use */
app.get('/hello', function(req, res ) {
    res.send('Hello from a GET endoint!');
});

app.get('/hello/:name', function(req, res) {
    res.send('Hello, ' + req.params.name);
});

app.post('/hello', function(req, res) {
    res.send('Hello, ' + req.body.name + ' from a POST endpoint!');
})