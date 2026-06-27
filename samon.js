document.querySelector("#green").addEventListener("click", function () {
    var audio= new Audio("sounds/green.mp3");
audio.play()});
document.querySelector("#red").addEventListener("click", function () {
    var audio1= new Audio("sounds/red.mp3");
audio1.play()});
document.querySelector("#blue").addEventListener("click", function () {
    var audio2= new Audio("sounds/blue.mp3");
    audio2.play()});
document.querySelector("#yellow").addEventListener("click", function () {
    var audio3= new Audio("sounds/yellow.mp3");
    audio3.play()});
    var gamePattern=[];
    var  buttoncolor=["red","green","yellow","blue"];
function nextsequence(){
    var randomnumber=(Math.floor(Math.random()*4));
    var randomchossecolor =buttoncolor[randomnumber];
gamePattern.push(randomchossecolor);
}
document.querySelector("#" + randomchosencolor)
        .classList.add("pressed");

setTimeout(function () {
    document.querySelector("#" + randomchosencolor)
            .classList.remove("pressed");
}, 100);
 
