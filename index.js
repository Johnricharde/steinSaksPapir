// MODEL ////////////////////////////////////////////////////////////////////////////////
const app = document.getElementById('app');

const emojiArray = ["✊", "✋", "✌️",];


// VIEW /////////////////////////////////////////////////////////////////////////////////
updateView()
function updateView() {
let html = /*HTML*/ `
    <div>
        <h1>Rock Paper Crossblades</h1>
        <div>
            Choose one:
            <button onclick="choseRock()">✊</button>
            <button onclick="chosePaper()">✋</button>
            <button onclick="choseCrossblades()">✌️</button>
            <div id="result-display">
            </div>
        </div>
    </div>
`
app.innerHTML = html
}



// CONTROLLER ///////////////////////////////////////////////////////////////////////////
let randomNum = "";
let resultOfMatch = "";
let resultDisplay = document.getElementById('result-display');

function generateRandomNum() {
    randomNum = Math.floor(Math.random() * 3)
}



// Runs one of these based on which button you clicked
function choseRock() {
    generateRandomNum();
    console.log(emojiArray[randomNum])

    if (randomNum == 0) {
        resultOfMatch = "IT'S A DRAW!"
    } else if (randomNum == 1) {
        resultOfMatch = "YOU LOST!"
    } else if (randomNum == 2) {
        resultOfMatch = "YOU WON!"
    }
    resultDisplay.innerHTML = `
    <pre>

        You chose ✊

        They chose ${emojiArray[randomNum]}

        ${resultOfMatch}
    </pre>`;
}
function chosePaper() {
    generateRandomNum();
    console.log(emojiArray[randomNum])

    if (randomNum == 1) {
        resultOfMatch = "IT'S A DRAW!"
    } else if (randomNum == 2) {
        resultOfMatch = "YOU LOST!"
    } else if (randomNum == 0) {
        resultOfMatch = "YOU WON!"
    }
    resultDisplay.innerHTML = `
    <pre>

        You chose ✋

        They chose ${emojiArray[randomNum]}

        ${resultOfMatch}
    </pre>`;
}
function choseCrossblades() {
    generateRandomNum();
    console.log(emojiArray[randomNum])

    if (randomNum == 2) {
        resultOfMatch = "IT'S A DRAW!"
    } else if (randomNum == 0) {
        resultOfMatch = "YOU LOST!"
    } else if (randomNum == 1) {
        resultOfMatch = "YOU WON!"
    }
    resultDisplay.innerHTML = `
    <pre>
    
        You chose ✌️
    
        They chose ${emojiArray[randomNum]}
    
        ${resultOfMatch}
    </pre>`;
}