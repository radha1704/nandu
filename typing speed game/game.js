window.addEventListener("load", init);
const currenttym = {
  easy: 15,
  medium: 10,
  hard: 5
};
const decidelevel = currenttym.easy;

let time = decidelevel;
let score = 0;
let average = 0;
let isPlay;

const wordInput = document.querySelector("#wordinput");
const currentWord = document.querySelector("#current");
const scoreDisp = document.querySelector("#score");
const timeDisp = document.querySelector("#time");
const message1 = document.querySelector("#msg1");
const message2 = document.querySelector("#msg2");
const message3 = document.querySelector("msg3");
const seconds = document.querySelector("#sec");
//const typedarr = document.querySelector("#arr1");
let wt1 = document.querySelector("#wordstyp");
let wt2 = document.querySelector("#wordstyp2");
let wt3 = document.querySelector("#wordsmis2");
const words = [
  "mAn",
  "cLient",
  "develoPer",
  "Engineer",
  "Hello",
  "braIn",
  "blue",
  "grRen",
  "emploYee",
  "Ready",
  "GreaT",
  "wElcome"
];
let typed = [];
let missed = [];

function pushes() {}

function init() {
  console.log("init");
  showWords(words);
  wordInput.addEventListener("input", gameStart);
  setInterval(countdown, 1000);
  //check status
  setInterval(checkStatus, 100);
}

function gameStart() {
  if (isPartialMatch()) {
    if (wordInput.value === currentWord.innerText) {
      wt2.innerText = currentWord.innerText;
      typed.push(wt2.innerText);
      score++;

      showWords(words);
      wordInput.value = "";
      // typedarr.innerHTML = typed.push(wordInput.value);
      // wt.innerHTML = typedarr;
    }
    // time = decidelevel + 1;
  } else {
    isPlay = false;
    wt3.innerText = currentWord.innerText;
    missed.push(wt3.innerText);
    wordInput.value = "";
    score--;
    showWords(words);
  }
  average = (score / 15) * 100;
  wt2.innerHTML = "<h2>" + typed.join("\n") + "</h2>";
  wt3.innerHTML = "<h2>" + missed.join("\n") + "</h2>";
  scoreDisp.innerHTML = "<h1>" + score + "</h1>";
  averageDisp.innerHTML = "<h1>" + avg + "%</h1>";
}
//match the current word to the input
function isPartialMatch() {
  // if (wordInput.value === currentWord.innerHTML) {
  //   message.innerHTML = "CORRECT!!!!!";
  //   return true;
  // } else {
  //   message.innerHTML = "";

  for (let i = 0; i < wordInput.value.length; i++) {
    if (wordInput.value.charAt(i) === currentWord.innerText.charAt(i)) {
    } else {
      message1.innerHTML = "";
      return false;
    }
  }
  return true;
}

// function screen44() {
//   location.replace("screen4.html");
// }
function showWords(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    //game over
    isPlay = false;
  }
  timeDisp.innerHTML = "<h1>" + time + "</h1>";
}

function checkStatus() {
  if (!isPlay && time === 0) {
    message1.innerHTML = "<h1>Game Over!!</h1>";
    scoreDisp.innerHTML = score;
    message2.innerHTML =
      "<h1 align='center'>your score:" + scoreDisp.innerHTML + "</h1>";
    localStorage.setItem("msg2", message2.innerHTML);

    setTimeout(function() {
      window.location.href = "screen4.html";
    }, 2500);
  }
}
function screen44() {
  location.replace("screen4.html");
}

let i = 15;
// let x = 60;
let timerId = setInterval(item => {
  document.querySelector("#time").innerHTML = i--;
  document.querySelector(".progress-bar").style.width =
    (15 - i) * (100 / 15) + "%";
}, 1000);
setTimeout(() => {
  clearInterval(timerId);
  location.replace("screen4.html");
}, 61000);
