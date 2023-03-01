const quizDB = [
    {
        question: "Q1:Which one of the below is a divide and conquer approach?",
        a: "Insertion Sort",
        b: "Merge Sort",
        c: "Shell Sort",
        d: "Heap Sort",
        ans: "ans2"
    },
    {
        question: "Q2:push() and pop() functions are found in",
        a: "queues",
        b: "lists",
        c: "stacks",
        d: "trees",
        ans: "ans3"  
    },
    {
        question: "Q3:In the deletion operation of max heap, the root is replaced by",
        a: "next available value in the left sub-tree.",
        b: " next available value in the right sub-tree.",
        c: "any random value from the heap.",
        d: "last element of the last level",
        ans: "ans4"  
    },
    {
        question: "Q4:Which of the following algorithm is not stable?",
        a: "Bubble Sort",
        b: "Quick Sort",
        c: "Merge Sort",
        d: "Insertion Sort",
        ans: "ans2"   
    },
    {
        question: "Q5: An adaptive sorting algorithm −",
        a: "adapts to new computers.",
        b: "takes advantage of already sorted elements.",
        c: "takes input which is already sorted.",
        d: "none of the above.",
        ans: "ans2"   
    },
    {
        question: "Q6:What is the worst case time complexity of linear search algorithm?",
        a: "0(1)",
        b: "O(n)",
        c: "O(log n)",
        d: "O(n^2)",
        ans: "ans4"   
    },
    {
        question: "Q7:Maximum number of nodes in a binary tree with height k, where root is height 0, is",
        a: " 2^k − 1",
        b: "2^(k+1) − 1",
        c: " 2^(k-1) + 1",
        d: "2^k + 1",
        ans: "ans2"   
    },
    {
        question: "Q8: Quick sort algorithm is an example of",
        a: "Greedy Approach",
        b: "Improved Binary Search",
        c: "Dynamic Programming",
        d: "Divide and Conquer",
        ans: "ans4"   
    },
    {
        question: "Q9:Visiting root node after visiting left and right sub-trees is called",
        a: "In-order Traversal",
        b: "Pre-Order Traversal",
        c: "Post-Order Traversal",
        d: "None of the above",
        ans: "ans3"   
    },
    {
        question: "Q10:Which method can find if two vertices x & y have path between them?",
        a: "Depth First Search",
        b: "Breadth First Search",
        c: "Both a & b",
        d: "None a or b",
        ans: "ans3"   
    },
    {
        question: "Q11:Which of the following uses memoization?",
        a: "Greedy Approach",
        b: "Divide and Conquer Approach",
        c: "Dynamic Programming Approach",
        d: "None of the above",
        ans: "ans3"   
    },
    {
        question: "Q12:Recursion uses more memory space than iteration because",
        a: "it uses stack instead of queue.",
        b: "every recursive call has to be stored.",
        c: "both a & b.",
        d: "none a or b.",
        ans: "ans2"   
    },
    {
        question: "Q13:Which of the following is not the type of queue?",
        a: "Priority Queue",
        b: "Single-ended Queue",
        c: "Circular Queue",
        d: "Ordinary Queue",
        ans: "ans2"   
    },
    {
        question: "Q14: When a pop() operation is called on an empty queue, what is the condition called?",
        a: "Underflow",
        b: "Overflow",
        c: "Syntax Error",
        d: "Garbage Value",
        ans: "ans1"   
    },
    {
        question: "Q15:Which of the following data structures can be used to implement queues?",
        a: "Stack",
        b: "Arrays",
        c: "Linked List",
        d: "All of the above",
        ans: "ans4"   
    },
    
    ];
    
    const question = document.querySelector('.question');
    const option1 = document.querySelector('#option1');
    const option2 = document.querySelector('#option2');
    const option3 = document.querySelector('#option3');
    const option4 = document.querySelector('#option4');
    const submit = document.querySelector('#submit');
    const next = document.querySelector('#next');
    const prev =document.querySelector('#prev');
    
    const answers = document.querySelectorAll('.answer');
    
    const showScore = document.querySelector('#showScore');
    
    let questionCount = 0;
    let score = 0;
    
    const loadQuestion = () => {
    
        const questionList = quizDB[questionCount];
    
        question.innerText =  quizDB[questionCount].question;
    
        option1.innerText = questionList.a;
        option2.innerText = questionList.b;
        option3.innerText = questionList.c;
        option4.innerText = questionList.d;
    }
    
    loadQuestion();
    
    const getCheckAnswer = () =>{
        let answer;
        answers.forEach((curAnsElem) => {
            if(curAnsElem.checked){
                answer = curAnsElem.id;
            }
        });
    
        return answer;
    }
    
    const deselectAll = () => {
        answers.forEach((curAnsElem) => curAnsElem.checked = false );
    }
    
    next.addEventListener('click', async () => {
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);
        questionCount ++;
    
        deselectAll();
    
        if(questionCount < quizDB.length){
            loadQuestion();
        }else{
            showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length}</h3>
            <button class = "btn" onclick="location.reload()">Play Again</button>
            `;
    
            showScore.classList.remove('scoreArea');
    
        }
    });
    prev.addEventListener('click', async () => {
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);
        questionCount --;
    
        deselectAll();
    
        if(questionCount < quizDB.length){
            loadQuestion();
        }else{
            showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length}</h3>
            <button class = "btn" onclick="location.reload()">Play Again</button>
            `;
    
            showScore.classList.remove('scoreArea');
    
        }
    });
    submit.addEventListener('click', async () => {
        const checkedAnswer = getCheckAnswer();
        console.log(checkedAnswer);
    
        if(checkedAnswer ===  quizDB[questionCount].ans){
            score ++;
        };
    
        // // http api call using fetch
        // await fetch("https://cat-fact.herokuapp.com/facts").then(data => {
        //     console.log({facts})
        // }).catch(err => {
        //     console.log({err})
        // })
    
        questionCount ++;
    
        deselectAll();
    
        if(questionCount < quizDB.length){
            loadQuestion();
        }else{
            showScore.innerHTML = `
            <h3> You scored ${score}/${quizDB.length}</h3>
            <button class = "btn" onclick="location.reload()">Play Again</button>
            `;
    
            showScore.classList.remove('scoreArea');
    
        }
     
    });
    
    