const RANDOM_QUOTE_API_URL = 'https://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quote-display');
const quoteInputElement = document.getElementById('quote-input');
const timerElement = document.getElementById('timer');

quoteInputElement.addEventListener('input',  () => {
    const arrayQuote = quoteDisplayElement.querySelectorAll('span');
    const inputValue = quoteInputElement.value.split('');
    let correct = true;
    arrayQuote.forEach((span, index) => {
        const letter = inputValue[index];
        if (letter == null) {
            span.classList.remove('true');
            span.classList.remove('false');
            correct = false;
        } 
        else if (letter === span.innerText) {
            span.classList.add('true');
            span.classList.remove('false');
        }
        else {
            span.classList.add('false');
            span.classList.remove('true');
            correct = false;
        }
    });

    if (correct) {
        renderNewQuote();
    }
});

function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data.content);
}

async function renderNewQuote() {
    const quote = await getRandomQuote();
    quoteDisplayElement.innerText = '';
    quote.split('').forEach(letter => {
        const span = document.createElement('span');
        span.classList.add('true')
        span.innerText = letter;
        quoteDisplayElement.appendChild(span);
    });
    quoteInputElement.value = null;
    
    if (quoteInputElement.value.length != 0) {
        startTimer();
    }
}

let startTime
function startTimer() {
    timerElement.innerText = 0;
    startTime = new Date();
    setInterval(() => {
        timer.innerText = getTimerTime();


    }, 1000);

}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote();