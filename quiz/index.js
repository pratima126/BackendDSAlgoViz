fetch('/question')
  .then(response => response.json())
  .then(data => {
    // Do something with the question and options, e.g. display them on the page
    console.log(data.question);
    console.log(data.options);
  });
