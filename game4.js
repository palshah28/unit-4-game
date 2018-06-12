var winningNumber = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;
var redCrystal = 0;
var purpleCrystal = 0;
var yellowCrystal = 0;
var greenCrytstal = 0;
var winningNumberDiv ="";
var gameOver = false;
// winningNumberDiv = ;
// var cur
var crystalAudio = new Audio('Magic Wand.mp3');
window.onload = function (){
    wins = 0;
    gameInitialize ();    
}

function gameInitialize() {
    gameOver = false;
    currentScore = 0;
    winningNumber = getRandomInt(19,120);
    $("#winningnumber").html(winningNumber) ;
    $("#currentscore").html(currentScore) ;
    $("#loses").html(losses) ;
    $("#wins").html(wins);
    $("#resultP").html("");
    redCrystal = getRandomInt(1,12);
    yellowCrystal = getRandomInt(1,12);
    greenCrytstal = getRandomInt(1,12);
    purpleCrystal = getRandomInt(1,12);
    
    console.log(" r "+ redCrystal+" y "+yellowCrystal+" g "+greenCrytstal+" p "+purpleCrystal);
   
     $(".crystal").on("click",runCrystal);
    //  $("#yellowc").on("click",runCrystal);
    //  $("#greenc").on("click",runCrystal);
    //  $("#purplec").on("click",runCrystal);
}

function gameReset() {
    wins = 0;
    losses = 0;
    gameInitialize();
}



function runCrystal() {
   
if(gameOver == false) { 
    var crystalColor = $(this).attr("data-value");
    if(crystalColor == "red") {
        crystalAudio.play();
        currentScore += redCrystal;
        // alert(crystalColor);
        console.log(crystalColor);
    }
    else if(crystalColor == "purple") {
        crystalAudio.play();
        currentScore += purpleCrystal;
        // alert(crystalColor);
        console.log(crystalColor);
    }
    else if(crystalColor == "yellow") {
        crystalAudio.play();
        currentScore += yellowCrystal;
        // alert(crystalColor);
        console.log(crystalColor);
    }
    else {
        crystalAudio.play();
        currentScore += greenCrytstal;
        // alert(crystalColor);
        console.log(crystalColor);
    }

    $("#currentscore").html(currentScore) ;
if (winningNumber<currentScore){
    // alert("loser");
    losses++;
    $("#loses").html(losses) ;
    gameOver = true;    	
    $(".crystal").unbind( "click" );
    $("#resultP").html("<h1>GAME OVER !!!</h1>");
}
else if(winningNumber == currentScore) {
    wins++;
    $("#wins").html(wins) ;
    gameOver = true;    	
    $(".crystal").unbind( "click" );
    $("#resultP").html("<h1>YOU WIN !!!</h1>");
}
}
    // console.log(redCrystal);
}
function getRandomInt(i,j) {
    var result = 0; 
    if (i>j) {
        i=j+i;
        j=i-j;
        i=i-j;
    }

    var spread = j-i+1;
    // console.log(spread); 
  //  var result = ((parseInt(Math.random())*10000000)%spread) + i;
    result = i + Math.floor((Math.random()*spread));  
return (result);
}