/**
 * Created by anthonyrogers on 5/4/16.
 */

var buttonArray = ["play", "Stats", "Settings"];

function runPage(){
    document.getElementById("gamebox").innerHTML = "<a href='#'> click me</a>";
    for(var i=0; i <buttonArray.length; i++){
        document.getElementById("gamecontainer").innerHTML += "<button >" + buttonArray[i] +"</button>";
    }
}

function bug(incomingid){
    document.getElementById(incomingid).innerHTML="Squish Bug"
}

var Candy = function(){
    this.eatJunk = function() {
        console.log("Junk Gone");

    }
}
var myCandy = new Candy();