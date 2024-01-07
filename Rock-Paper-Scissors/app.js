const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
let wincount = 0;
let losecount = 0;
let drawcount = 0;
let continuebtn = document.getElementById("continuebutton");

function getrandom() {
    let random = Math.random();
    let computer;
    if (random > 0 && random <= 0.3) computer = "rock";

    else if (random > 0.3 && random <= 0.6) computer = "paper";

    else computer = "scissor";

    return computer;
}
let Resultbox = document.getElementById("Resultbox");
continuebtn.onclick = () => {
    Resultbox.classList.remove('lastbox')
    Resultbox.classList.add('lastbox1')
}
rock.onclick = () => {
    let computer = getrandom();
    let win = false;
    let draw = false;
    if (computer == "scissor") {
        win = true;
        wincount++;
    }
    else if (computer == "paper") {
        win = false;
        losecount++;
    }
    else {
        draw = true;
        drawcount++;
    }
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const resultboxtext = document.getElementById('lastboxtext');
    if (win) {
        player1.src = 'images/Rock1-right.png';
        player2.src = 'images/Secissor-2.png';
        resultboxtext.innerText = 'You Win! Computer Selects Scissors'
        resultboxtext.style.color='green'
        const winbox = document.getElementById('winbox');
        winbox.innerText = 'Win = ' + wincount;
    }
    else if (draw) {
        player1.src = 'images/Rock1-right.png';
        player2.src = 'images/Rock2.png';
        resultboxtext.innerText = 'Draw! Computer also Selects Rock';
        resultboxtext.style.color='blueviolet'
        const drawbox = document.getElementById('drawbox');
        drawbox.innerText = 'Draw = ' + drawcount;

    }
    else {
        player1.src = 'images/Rock1-right.png';
        player2.src = 'images/Paper-2.png';
        resultboxtext.innerText = 'You Lose! Computer Selects Paper'
        resultboxtext.style.color='red'
        const losebox = document.getElementById('losebox');
        losebox.innerText = 'Lose = ' + losecount;
    }

    Resultbox.classList.remove('lastbox1')
    Resultbox.classList.add('lastbox');
}
paper.onclick = () => {
    let computer = getrandom();

    let win = false;
    let draw = false;
    if (computer == "rock") {
        win = true;
        wincount++;
    }
    else if (computer == "scissor") {
        win = false;
        losecount++;
    }
    else {
        draw = true;
        drawcount++;
    }
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const resultboxtext = document.getElementById('lastboxtext');
    if (win) {
        player1.src = 'images/Paper1-right.png';
        player2.src = 'images/Rock2.png';
        resultboxtext.innerText = 'You Win! Computer Selects Rock'
        resultboxtext.style.color='green'
        const winbox = document.getElementById('winbox');
        winbox.innerText = 'Win = ' + wincount;
    }
    else if (draw) {
        player1.src = 'images/Paper1-right.png';
        player2.src = 'images/Paper-2.png';
        resultboxtext.innerText = 'Draw! Computer also Selects Paper';
        resultboxtext.style.color='blueviolet'

        const drawbox = document.getElementById('drawbox');
        drawbox.innerText = 'Draw = ' + drawcount;

    }
    else {
        player1.src = 'images/Paper1-right.png';
        player2.src = 'images/Secissor-2.png';
        resultboxtext.innerText = 'You Lose! Computer Selects Scissors';
        resultboxtext.style.color='red'
        const losebox = document.getElementById('losebox');
        losebox.innerText = 'Lose = ' + losecount;
    }

    Resultbox.classList.remove('lastbox1')
    Resultbox.classList.add('lastbox');
}
scissor.onclick = () => {
    let computer = getrandom();

    let win = false;
    let draw = false;
    if (computer == "paper") {
        win = true;
        wincount++;
    }
    else if (computer == "Rock") {
        win = false;
        losecount++;
    }
    else {
        draw = true;
        drawcount++;
    }
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const resultboxtext = document.getElementById('lastboxtext');
    if (win) {
        player1.src = 'images/Secissor1-right.png';
        player2.src = 'images/Paper-2.png';
        resultboxtext.innerText = 'You Win! Computer Selects Paper'
        resultboxtext.style.color='green'
        const winbox = document.getElementById('winbox');
        winbox.innerText = 'Win = ' + wincount;
    }
    else if (draw) {
        player1.src = 'images/Secissor1-right.png';
        player2.src = 'images/Secissor-2.png';
        resultboxtext.innerText = 'Draw! Computer also Selects Scissors';
        resultboxtext.style.color='blueviolet'
        const drawbox = document.getElementById('drawbox');
        drawbox.innerText = 'Draw = ' + drawcount;

    }
    else {
        player1.src = 'images/Secissor1-right.png';
        player2.src = 'images/Rock2.png';
        resultboxtext.innerText = 'You Lose! Computer Selects Rock';
        resultboxtext.style.color='red'
        const losebox = document.getElementById('losebox');
        losebox.innerText = 'Lose = ' + losecount;
    }
    Resultbox.classList.remove('lastbox1')
    Resultbox.classList.add('lastbox');
}



