import express from 'express';

const articleInfo = [
    { name: 'eternauta', upvotes: 0, comments: []},
    { name: 'amigos', upvotes: 0, comments: []},
    { name: 'socialismo', upvotes: 0, comments: []},
]

const app = express();

app.use(express.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const article = articleInfo.find(a =>a.name === req.params.name);
    article.upvotes += 1;

    res.json(article);
});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = articleInfo.find(a => a.name === name);

    article.comments.push({
        postedBy,
        text,
    });

    res.json(article);
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