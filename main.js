//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");

var allpages=document.querySelectorAll(".page");

//const menuItemsList=document.querySelector("ul");

//const hamBtn=document.querySelector("#haIcon");

//hamBtn.addEventListener("click", toggleMenus);

/*find references to all the buttons and ball */
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const resetBtn = document.querySelector("#resetBtn");
const ball = document.querySelector("#ball");
var ballX = ballY = 0; //assign initial position of ball
var MinX = 0, MinY = -20, MaxX = 1090, MaxY = 440;
//select all subtopic pages
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}

function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
onepage.style.display="block"; //show the page
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});

//function toggleMenus(){ /*open and close menu*/
//if menuItemsList dont have the class "menuShow", add it, else remove it
//menuItemsList.classList.toggle("menuShow");
//if menu is showing (has the class “menuShow”)
//if(menuItemsList.classList.contains("menuShow")){
//hamBtn.innerHTML="Close Menu"; //change button text to chose menu
//}else{ //if menu NOT showing
//hamBtn.innerHTML="Open Menu"; //change button text open menu
//}
//}

//function just to move left (decrease left style)
function MoveLeft(){
MovePos(-10,0);
}
//eventlisteners to activate MovePos
leftBtn.addEventListener("click", MoveLeft);
//leftBtn.addEventListener("click", MoveLeft(-10,0)); //wrong
//cannot do like this. MoveLeft(-10,0) will execute immediately
//using anonymous function to pass in arguments from eventlistener
rightBtn.addEventListener("click", function () {
MovePos(+10, 0)
});
upBtn.addEventListener("click", function () {
MovePos(0, -10)
});
downBtn.addEventListener("click", function () {
MovePos(0, +10)
});
resetBtn.addEventListener("click", ResetPos);

//functions to update variables to control ball position
function ResetPos() {
ballX=ballY=0; //reset to zero
UpdateBallStyle();
}
function MovePos(leftInc, topInc) {

if(ballX + leftInc >= MinX && ballX + leftInc <= MaxX ){
ballX += leftInc;
}

if(ballY + leftInc >= MinY && ballY + leftInc <= MaxY ){
ballY += topInc;
}


UpdateBallStyle();
}
//function to update ball css as well as display text
function UpdateBallStyle(){
ball.style.left = ballX+"px"; //set left property to ball x variable
ball.style.top = ballY+"px"; //set top property to ball x variable
ball.innerText = ballX + "," + ballY; //update ball text to show coordinate
}

document.addEventListener('keydown', (e) => {
console.log(e);
if (e.code === "ArrowRight"){
MovePos(10,0);
}
if (e.code === "ArrowLeft"){
MoveLeft();
}
if (e.code === "ArrowDown"){
MovePos(0, +10);
}
if (e.code === "ArrowUp"){
MovePos(0, -10);
}
//Need to inform user what keys to press. Better option: use switch case instead
})

hideall();
