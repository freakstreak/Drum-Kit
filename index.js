//here is the section for click events i.e. here when mouse is clicke od button it will create sound

var numberofbuttons = document.querySelectorAll("button").length;
var buttonselect = document.querySelectorAll("button");
for ( var i=0;i<numberofbuttons;i++)
{
    buttonselect[i].addEventListener("click",ale);
}
function ale()
{
    var buttoninnerhtml = this.innerHTML;
    keyboardval(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
}

//Here is the section for keyboard shortcuts i.e. here when we press keys sound will appear

 document.addEventListener("keydown", function(event) {
     keyboardval(event.key);
     buttonanimation(event.key);
 });

//This function is used for producing sound 

function keyboardval(key)
{
    switch(key)
    {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
    }
}

function buttonanimation(keyinbutton)
{
    var activebutton = document.querySelector("."+keyinbutton);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}