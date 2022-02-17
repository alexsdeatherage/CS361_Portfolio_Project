const typingDiv = document.getElementById('typing');
const statsDiv = document.getElementById('stats');
const startGameButton = document.getElementById('start-game');
const randomGameButton = document.getElementById('random-game');
const customGameButton = document.getElementById('custom-game');
const fileButton = document.getElementById('fileInput');
const randomNumberButton = document.getElementById('random-number');


console.log(typingDiv);

const paragraphs = ['The function of a paragraph is to mark a pause, setting the paragraph apart from what precedes it.','How such documents are actually stored depends on the file format.']

const random = ['violation choose cooperative domestic poor initial floor photocopy discrimination obligation', 'tray technique letter courage arise disappear inappropriate proud column influence implication steam get news census concrete jurisdiction theorist sand hell']

const custom = ["This is a sample custom text file that I plan to use for user inputted typing tests"]


const startGame = () => {
    // starts the standard typing game
    startGameButton.classList.add('hidden');
    randomGameButton.classList.add('hidden');
    customGameButton.classList.add('hidden');
    fileButton.classList.add('hidden');
    randomNumberButton.classList.add('hidden');
    typingDiv.innerHTML = '';
    statsDiv.innerHTML = '';
    const text = paragraphs[Math.floor(Math.random() * paragraphs.length)];

    const characters = text.split('').map((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        typingDiv.appendChild(span);
        return span;
    });
    
    let keyIndex = 0;
    let curserChar = characters[keyIndex];
    curserChar.classList.add('active');
    
    let starTime = null;
    
    
        const keydown = ({ key })=> {
    
        console.log(key);
        if (!starTime) {
            starTime = new Date();
        }
    
        if (key == curserChar.innerText) {
            curserChar.classList.remove('active');
            curserChar.classList.add('done');
            curserChar = characters[++keyIndex];
        }
    
        if (keyIndex >= characters.length) {
            const endTime = new Date();
    
            //display words per minute, since the game ended
            const time = endTime - starTime;
            const seconds = time / 1000;
            const minutes = seconds / 60;
            const numberOfWords = text.split(' ').length;
            const wpm = numberOfWords / minutes;
            document.getElementById('stats').innerText = `You typed ${wpm.toFixed(0)} words per minute`;
            document.removeEventListener("keydown", keydown);
            startGameButton.classList.remove('hidden');
            randomGameButton.classList.remove('hidden');
            customGameButton.classList.remove('hidden');
            fileButton.classList.remove('hidden');
            randomNumberButton.classList.remove('hidden');
            return
        }
        curserChar.classList.add('active');
    
        }
    
        document.addEventListener("keydown", keydown);
    }

const randomGame = () => {
    // starts the random typing game
    startGameButton.classList.add('hidden');
    randomGameButton.classList.add('hidden');
    customGameButton.classList.add('hidden');
    randomNumberButton.classList.add('hidden');
    fileButton.classList.add('hidden');
    typingDiv.innerHTML = '';
    statsDiv.innerHTML = '';
    const text = random[Math.floor(Math.random() * random.length)];

    const characters = text.split('').map((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        typingDiv.appendChild(span);
        return span;
    });
    
    let keyIndex = 0;
    let curserChar = characters[keyIndex];
    curserChar.classList.add('active');
    
    let starTime = null;
    
    
        const keydown = ({ key })=> {
    
        console.log(key);
        if (!starTime) {
            starTime = new Date();
        }
    
        if (key == curserChar.innerText) {
            curserChar.classList.remove('active');
            curserChar.classList.add('done');
            curserChar = characters[++keyIndex];
        }
    
        if (keyIndex >= characters.length) {
            const endTime = new Date();
    
            //display words per minute, since the game ended
            const time = endTime - starTime;
            const seconds = time / 1000;
            const minutes = seconds / 60;
            const numberOfWords = text.split(' ').length;
            const wpm = numberOfWords / minutes;
            document.getElementById('stats').innerText = `You typed ${wpm.toFixed(0)} words per minute`;
            document.removeEventListener("keydown", keydown);
            startGameButton.classList.remove('hidden');
            randomGameButton.classList.remove('hidden');
            customGameButton.classList.remove('hidden');
            fileButton.classList.remove('hidden');
            randomNumberButton.classList.remove('hidden');
            return
        }
        curserChar.classList.add('active');
    
        }
    
        document.addEventListener("keydown", keydown);
    }

const customGame = () => {
    // starts the random typing game
    startGameButton.classList.add('hidden');
    randomGameButton.classList.add('hidden');
    customGameButton.classList.add('hidden');
    randomNumberButton.classList.add('hidden');
    fileButton.classList.add('hidden');
    typingDiv.innerHTML = '';
    statsDiv.innerHTML = '';
    const text = custom[Math.floor(Math.random() * custom.length)];

    const characters = text.split('').map((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        typingDiv.appendChild(span);
        return span;
    });

    let keyIndex = 0;
    let curserChar = characters[keyIndex];
    curserChar.classList.add('active');

    let starTime = null;


    const keydown = ({ key })=> {

    console.log(key);
    if (!starTime) {
        starTime = new Date();
    }

    if (key == curserChar.innerText) {
        curserChar.classList.remove('active');
        curserChar.classList.add('done');
        curserChar = characters[++keyIndex];
    }

    if (keyIndex >= characters.length) {
        const endTime = new Date();

        //display words per minute, since the game ended
        const time = endTime - starTime;
        const seconds = time / 1000;
        const minutes = seconds / 60;
        const numberOfWords = text.split(' ').length;
        const wpm = numberOfWords / minutes;
        document.getElementById('stats').innerText = `You typed ${wpm.toFixed(0)} words per minute`;
        document.removeEventListener("keydown", keydown);
        startGameButton.classList.remove('hidden');
        randomGameButton.classList.remove('hidden');
        customGameButton.classList.remove('hidden');
        fileButton.classList.remove('hidden');
        randomNumberButton.classList.remove('hidden');
        return
    }
    curserChar.classList.add('active');

    }

    document.addEventListener("keydown", keydown);
}