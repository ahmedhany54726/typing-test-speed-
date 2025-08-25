//words
const words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
  "Pneumonoultramicroscopicsilicovolcanoconiosis"
];



// Setting Levels
const lvls = {
  "Easy": 10,
  "Normal": 6,
  "Hard": 2
};

//default level

let defaultLevelName = "Normal";

let defaultLevelSeconds = lvls[defaultLevelName];

//catch selectors

let startBtn = document.querySelector(".start");

let lvlNameSpan = document.querySelector(".message .lvl");

let secondsSpan = document.querySelector(".message .seconds");

let theWord = document.querySelector(".the-word");

let upcomingWords = document.querySelector(".upcoming-words");

let input = document.querySelector(".input");

let timeLeftSpan = document.querySelector(".time span");

let scoreGot = document.querySelector(".score .got");

let scoreTotal = document.querySelector(".score .total");

let finishMessage = document.querySelector(".finish");

//seting levels name +sec

lvlNameSpan.innerHTML = defaultLevelName;

 secondsSpan.innerHTML = defaultLevelSeconds;

timeLeftSpan.innerHTML = defaultLevelSeconds;

scoreTotal.innerHTML = words.length;

//disable paste event function
input.onpaste = function () {
    return false;
}

//start game function

startBtn.onclick = function () {
    this.remove();
    input.focus();

    //generate word function
 genWords()
}

// generate words function
function genWords() {
    //get words from array
    let randomWord = words[Math.floor(Math.random() * words.length)]; 

    //get word index
    let wordIndex = words.indexOf(randomWord);
    // remove word from array

    words.splice(wordIndex, 1);

    //show the random words
    theWord.innerHTML = randomWord;

    //empty upcoming words
    upcomingWords.innerHTML = '';

    //generate words
    for (let i = 0; i < words.length;i++){
        //create div element
        let div = document.createElement('div');

        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    //call start play function
    startPlay()
}

//start play function

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === "0") {
            //stop timer
            clearInterval(start);

            //compare the words
            if (theWord.innerHTML.toLocaleLowerCase() === input.value.toLocaleLowerCase()) {
                //empty input fiald
                input.value = '';
                //increase score by one
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    //call generate function
                    genWords()
                } else {
                    let span = document.createElement('span');
                    span.className = "good";
                    let spanText = document.createTextNode("you are haker pro what facking do you do");
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    ///remove upcoming word box
                    upcomingWords.remove();

                }
            } else {
                let span = document.createElement("span");
                span.classList = 'bad';
                let spanText = document.createTextNode("the turtle faster than you loser :)");
                span.appendChild(spanText);
                finishMessage.appendChild(span)
            }
        

        }
    }, 1000)
}