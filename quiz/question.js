const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const questionsFile = path.join(__dirname, 'questions.json');
let score = 0;

// Define endpoint to get a random question
app.get('/question', (req, res) => {
  // Load questions from JSON file
  const questions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
  // Choose a random question from the list
  const question = questions[Math.floor(Math.random() * questions.length)];
  // Return the question and its options as JSON
  res.json({
    question: question.question,
    options: question.options
  });
});

// Define endpoint to submit answer
app.post('/answer', (req, res) => {
  // Check if answer is correct
  const answer = req.body.answer;
  const questions = JSON.parse(fs.readFileSync(questionsFile, 'utf8'));
  const currentQuestion = questions.find(q => q.question === req.body.question);
  if (currentQuestion.answer === answer) {
    // Increment score if answer is correct
    score++;
  }
  res.sendStatus(200);
});

// Define endpoint to get final score
app.get('/score', (req, res) => {
  res.json({
    score: score
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
