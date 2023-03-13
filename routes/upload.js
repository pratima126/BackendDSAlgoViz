const question = document.getElementById("question").value;
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  const d = document.getElementById("d").value;

  const reqParams = {
   question,
   a,
   b,
   c,
   d,
  };



fetch('http://localhost:3000/api/quizroute/store', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      question: 'What is your favorite color?',
      answer: 'My favorite color is blue.'
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  