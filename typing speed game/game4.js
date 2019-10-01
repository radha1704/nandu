window.addEventListener("load", init);

let score = 0;

const scoreDisp = document.querySelector("#score");
const timeDisp = document.querySelector("#time");
const message1 = document.querySelector("#msg1");
const message2 = document.querySelector("#msg2");
const seconds = document.querySelector("#sec");

function init() {
  console.log("init");

  wordInput.addEventListener("input", checkStatus);

  //check status
  //   setInterval(checkStatus, 100);
}

function checkStatus() {
  scoreDisp.innerHTML = score;
  message2.innerHTML = "<h1>your score:</h1>" + scoreDisp.innerHTML;
}
