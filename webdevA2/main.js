var allDropPanel = document.querySelectorAll(".DropDownPanel");

var allDropBtn = document.querySelectorAll(".dropDownBtn");

var allShuttlecock = document.querySelectorAll(".Shuttlecock");

const scoreBox = document.getElementById("scoreBox");

const FinalScoreTxt = document.getElementById("finalScoreTxt");

const StartBtn = document.getElementById("StartGameBtn");

const RestartBtn = document.getElementById("RestartBtn");

const GamePanel = document.getElementById("MiniGameContainer");

const EndGamePanel = document.getElementById("EndGamePanel");

const bgmAudio = new Audio("Audio/bgm.mp3");

var BtnCounter = 0;
var shuttlecockCounter = 0;
var amountOfDisplayShuttle = 0;

var score=0;
var cycleLeft = 5;

var myInterval;

StartBtn.addEventListener("click", StartGame);
RestartBtn.addEventListener("click", StartGame);



function hideall(excludeID){
    
for(let onePanel of allDropPanel){

if(onePanel.id != excludeID && onePanel.classList.contains('showPanel')){
onePanel.classList.toggle("showPanel");
}

}

}

function show(panelno){
  
hideall("DropDownPanel"+panelno);

let onepage=document.querySelector("#DropDownPanel"+panelno);
onepage.classList.toggle("showPanel");
}


for(let btn of allDropBtn){
    BtnCounter++;
    let currentIndex = BtnCounter;
    
    btn.addEventListener("click", function () {
    show(currentIndex);

}); 

}

function hideAllShuttlecock() {

for(let crntShuttle of allShuttlecock){

if(crntShuttle.classList.contains('showUp')){
crntShuttle.classList.toggle("showUp");
}
}

}

function ballPicked(shuttleNum) {

score++;

scoreBox.innerHTML = "Shuttlecock kept: " + score;

let currentShuttlecock=document.querySelector("#shuttle"+shuttleNum);
currentShuttlecock.classList.toggle("showUp");

}

function GetRandom(min,max){

return Math.round(Math.random() * (max - min)) + min;
}

for(let s of allShuttlecock){
    shuttlecockCounter++;
    let currentCounter = shuttlecockCounter;
    
    s.addEventListener("click",  function () {
    ballPicked(currentCounter);

})
}

function setShuttlecockPos() {

hideAllShuttlecock();

if(cycleLeft > 0){

amountOfDisplayShuttle = GetRandom(2, 3);

for(let i = 0; i < allShuttlecock.length; i++){

    if(i < amountOfDisplayShuttle){
        allShuttlecock[i].style.left = GetRandom(0, 80) + "%";
        allShuttlecock[i].style.top = GetRandom(0, 50) + "%";
        allShuttlecock[i].classList.toggle("showUp");
    }
}

cycleLeft--;

}
else{
    clearInterval(myInterval);
    FinalScoreTxt.innerHTML = "Total shuttlecock kept: " + score;
    EndGamePanel.style.display ="block";
}

}

function StartGame(){
    bgmAudio.currentTime = 0; 
    bgmAudio.play();
    cycleLeft = 5;
    score = 0;
    scoreBox.innerHTML = "Shuttlecock kept: " + score;
    FinalScoreTxt.innerHTML= "Total shuttlecock kept: " + 0;
    EndGamePanel.style.display ="none";
    StartBtn.style.display ="none";
    GamePanel.style.display ="block";
    setShuttlecockPos();
    myInterval = setInterval(setShuttlecockPos, 1500);
    
}