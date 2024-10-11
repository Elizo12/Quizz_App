// const additionalQuestions = [
//     {
//         question: 'What is the capital of Japan?',
//         answers: [
//             {text: 'Beijing', correct: false},
//             {text: 'Seoul', correct: false},
//             {text: 'Tokyo', correct: true},
//             {text: 'Bangkok', correct: false}
//         ]
//     },
//     {
//         question: 'Which planet is known as the Red Planet?',
//         answers: [
//             {text: 'Earth', correct: false},
//             {text: 'Mars', correct: true},
//             {text: 'Jupiter', correct: false},
//             {text: 'Venus', correct: false}
//         ]
//     },
//     {
//         question: 'Who wrote the play "Romeo and Juliet"?',
//         answers: [
//             {text: 'William Shakespeare', correct: true},
//             {text: 'Jane Austen', correct: false},
//             {text: 'Charles Dickens', correct: false},
//             {text: 'F. Scott Fitzgerald', correct: false}
//         ]
//     },
//     {
//         question: 'In which year did the Titanic sink?',
//         answers: [
//             {text: '1912', correct: true},
//             {text: '1905', correct: false},
//             {text: '1925', correct: false},
//             {text: '1930', correct: false}
//         ]
//     },
//     {
//         question: 'What is the largest mammal on Earth?',
//         answers: [
//             {text: 'Elephant', correct: false},
//             {text: 'Blue Whale', correct: true},
//             {text: 'Giraffe', correct: false},
//             {text: 'Hippopotamus', correct: false}
//         ]
//     }
// ];

// const moreQuestions = [
//     {
//         question: 'What is the currency of Brazil?',
//         answers: [
//             {text: 'Peso', correct: false},
//             {text: 'Real', correct: true},
//             {text: 'Euro', correct: false},
//             {text: 'Yen', correct: false}
//         ]
//     },
//     {
//         question: 'Who painted the Mona Lisa?',
//         answers: [
//             {text: 'Vincent van Gogh', correct: false},
//             {text: 'Leonardo da Vinci', correct: true},
//             {text: 'Pablo Picasso', correct: false},
//             {text: 'Claude Monet', correct: false}
//         ]
//     },
//     {
//         question: 'Which element has the chemical symbol "O"?',
//         answers: [
//             {text: 'Oxygen', correct: true},
//             {text: 'Gold', correct: false},
//             {text: 'Iron', correct: false},
//             {text: 'Silver', correct: false}
//         ]
//     },
//     {
//         question: 'What is the largest ocean on Earth?',
//         answers: [
//             {text: 'Indian Ocean', correct: false},
//             {text: 'Atlantic Ocean', correct: false},
//             {text: 'Pacific Ocean', correct: true},
//             {text: 'Arctic Ocean', correct: false}
//         ]
//     },
//     {
//         question: 'Who wrote "To Kill a Mockingbird"?',
//         answers: [
//             {text: 'George Orwell', correct: false},
//             {text: 'Harper Lee', correct: true},
//             {text: 'J.K. Rowling', correct: false},
//             {text: 'Mark Twain', correct: false}
//         ]
//     }
// ];

// ...additionalQuestions,
    // ...moreQuestions,
const questions = [
        {
            question: 'What does HTTP stand for?',
            answers: [
                {text: 'HyperText Transfer Protocol', correct: true},
                {text: 'HyperTransfer Text Protocol', correct: false},
                {text: 'High Transmission Protocol', correct: false},
                {text: 'HyperText Transmission Protocol', correct: false}
            ]
        },
        {
            question: 'What is the main purpose of a router in a computer network?',
            answers: [
                {text: 'To connect multiple devices within the same network', correct: false},
                {text: 'To forward data packets between computer networks', correct: true},
                {text: 'To amplify internet signals', correct: false},
                {text: 'To protect against cyber attacks', correct: false}
            ]
        },
        {
            question: 'What is the function of DNS in computer networks?',
            answers: [
                {text: 'Determining the geographical location of a device', correct: false},
                {text: 'Converting domain names to IP addresses', correct: true},
                {text: 'Encrypting data for secure transmission', correct: false},
                {text: 'Filtering internet content', correct: false}
            ]
        },
        {
            question: 'Which protocol is used to send emails?',
            answers: [
                {text: 'FTP', correct: false},
                {text: 'SMTP', correct: true},
                {text: 'HTTP', correct: false},
                {text: 'TCP', correct: false}
            ]
        },
        {
            question: 'What is the purpose of a firewall in computer security?',
            answers: [
                {text: 'To prevent physical theft of computer hardware', correct: false},
                {text: 'To protect against software viruses', correct: false},
                {text: 'To monitor and control incoming and outgoing network traffic', correct: true},
                {text: 'To optimize computer performance', correct: false}
            ]
        },
        {
            question: 'What does IP address stand for?',
            answers: [
                {text: 'Internet Provider address', correct: false},
                {text: 'Internal Protocol address', correct: false},
                {text: 'Internet Protocol address', correct: true},
                {text: 'Internet Port address', correct: false}
            ]
        },
        {
            question: 'What is the purpose of subnet mask?',
            answers: [
                {text: 'To hide the IP address of a device', correct: false},
                {text: 'To identify the network portion of an IP address', correct: true},
                {text: 'To encrypt data during transmission', correct: false},
                {text: 'To authenticate users on a network', correct: false}
            ]
        },
        {
            question: 'Which of the following is NOT a type of network topology?',
            answers: [
                {text: 'Star', correct: false},
                {text: 'Mesh', correct: false},
                {text: 'Line', correct: true},
                {text: 'Bus', correct: false}
            ]
        },
        {
            question: 'What does LAN stand for?',
            answers: [
                {text: 'Local Access Network', correct: false},
                {text: 'Large Area Network', correct: false},
                {text: 'Local Area Network', correct: true},
                {text: 'Limited Area Network', correct: false}
            ]
        },
        {
            question: 'Which device is used to connect multiple computers in a LAN?',
            answers: [
                {text: 'Router', correct: false},
                {text: 'Switch', correct: true},
                {text: 'Modem', correct: false},
                {text: 'Firewall', correct: false}
            ]
        },
        {
            question: 'What is the purpose of ARP in networking?',
            answers: [
                {text: 'To translate domain names to IP addresses', correct: false},
                {text: 'To identify the physical address of a device on the network', correct: true},
                {text: 'To establish a secure connection between two devices', correct: false},
                {text: 'To encrypt data during transmission', correct: false}
            ]
        },
        {
            question: 'What is the maximum number of devices that can be connected to a single USB port using a hub?',
            answers: [
                {text: '4', correct: false},
                {text: '8', correct: false},
                {text: '127', correct: true},
                {text: '256', correct: false}
            ]
        },
        {
            question: 'Which protocol is used for secure communication over a computer network?',
            answers: [
                {text: 'HTTP', correct: false},
                {text: 'FTP', correct: false},
                {text: 'SSH', correct: true},
                {text: 'SMTP', correct: false}
            ]
        },
        {
            question: 'What is the primary function of a modem?',
            answers: [
                {text: 'To convert digital signals to analog signals for transmission over telephone lines', correct: true},
                {text: 'To amplify internet signals', correct: false},
                {text: 'To protect against cyber attacks', correct: false},
                {text: 'To connect multiple devices within the same network', correct: false}
            ]
        },
        {
            question: 'What is the purpose of NAT in networking?',
            answers: [
                {text: 'To translate domain names to IP addresses', correct: false},
                {text: 'To identify the physical address of a device on the network', correct: false},
                {text: 'To map private IP addresses to public IP addresses for internet communication', correct: true},
                {text: 'To establish a secure connection between two devices', correct: false}
            ]
        },
        {
            question: 'Which organization oversees the assignment of IP addresses and domain names?',
            answers: [
                {text: 'IEEE', correct: false},
                {text: 'W3C', correct: false},
                {text: 'ICANN', correct: true},
                {text: 'ISO', correct: false}
            ]
        },
        {
            question: 'What is the purpose of SSL/TLS?',
            answers: [
                {text: 'To compress data for faster transmission', correct: false},
                {text: 'To authenticate users on a network', correct: false},
                {text: 'To encrypt data for secure communication over the internet', correct: true},
                {text: 'To filter internet content', correct: false}
            ]
        },
        {
            question: 'Which protocol is used for file transfer over the internet?',
            answers: [
                {text: 'HTTP', correct: false},
                {text: 'FTP', correct: true},
                {text: 'SMTP', correct: false},
                {text: 'SSH', correct: false}
            ]
        },
        {
            question: 'What does VPN stand for?',
            answers: [
                {text: 'Virtual Private Network', correct: true},
                {text: 'Very Private Network', correct: false},
                {text: 'Virtual Personal Network', correct: false},
                {text: 'Very Personal Network', correct: false}
            ]
        },
        {
            question: 'Which device is used to connect a computer to the internet over a telephone line?',
            answers: [
                {text: 'Modem', correct: true},
                {text: 'Router', correct: false},
                {text: 'Switch', correct: false},
                {text: 'Firewall', correct: false}
            ]
        }
    ];
    
    
const questionElement = document.getElementById('question')
const answerBtns = document.getElementById('answer-btns')
const nextBtn = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestions()
}

function showQuestions(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answerBtns.appendChild(button)
        if (answer.correct){
            button.dataset.correct = answer.correct;//Specifically, in line 65, the dataset.correct property is set on the button element. This is done using the dataset property, which allows you to access and modify the custom data attributes associated with an element.
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextBtn.style.display='none';
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target; //This line gets the HTML element that triggered the event (in this case, the button that was clicked) and assigns it to the variable selectedBtn.
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct==='true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display='block';
}

function showScore(){
    resetState()
    // const scoreFinal =  document.createElement('p');
    if (score >= questions.length/2){
        questionElement.innerHTML = `You Passed, You got ${score} out of ${questions.length}!`;
    }else{
        questionElement.innerHTML = `You Failed, You got ${score} out of ${questions.length}`;
    }
    
    // scoreFinal.innerHTML = score + '/' + questions.length
    // answerBtns.appendChild(scoreFinal)
    nextBtn.innerHTML = 'Play again'
    nextBtn.style.display='block';
}

function handleNextQuestion(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click', ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextQuestion();
    }else{
        startQuiz()
    }
})

startQuiz()