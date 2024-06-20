// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Parse request body
app.use(express.json());

// Create a mock database
const comments = [
    {
        id: 1,  // Unique identifier
        username: 'Alice',
        comment: 'Hello, world!'
    },
    {
        id: 2,
        username: 'Bob',
        comment: 'Hi, there!'
    }
];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const username = req.body.username;
    const comment = req.body.comment;

    const newComment = {
        id: comments.length + 1,
        username: username,
        comment: comment
    };

    comments.push(newComment);

    res.json(newComment);
});

// Start the web server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Test the web server
// Open the terminal and run the following commands:
// curl -X GET http://localhost:3000/comments
// curl -X POST http://localhost:3000/comments -H "Content-Type: application/json" -d '{"username": "Charlie", "comment": "Hey, everyone!"}'
// curl -X GET http://localhost:3000/comments
