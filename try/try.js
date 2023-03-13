const xhr = new XMLHttpRequest();
xhr.open('GET', 'questions.json');
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const questions = data.questions;
    // Do something with the questions array
  }
};
xhr.send();

fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    const questions = data.questions;
    // Do something with the questions array
    console.log (data)
  });
