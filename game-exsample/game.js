/**
 * Created by anthonyrogers on 4/26/16.
 */

var cardsflipped = 0;
var cardonetype = 0;
var cardtwotype = 0;
var flippedone;
var flippedtwo;
var score = 0;

function turnCard(itemid, cardtext, connection){
    "use strict";
    var mycard = document.getElementById(itemid);
    mycard.style.background = "none";
    mycard.style.backgroundColor = "#FF0DFF";
    mycard.firstChild.innerHTML = cardtext;
    cardsflipped ++;
    //alert("card is flipped" + cardsflipped);

    if(cardsflipped <= 2){
        cardonetype = connection;
        flippedone = itemid;
    }
    if(cardsflipped >= 2){
        cardtwotype = connection;
        flippedtwo = itemid;
        if(cardonetype === cardtwotype){
            alert("it's a match!");
            document.getElementById(flippedone).style.display = "none";
            document.getElementById(flippedtwo).style.display = "none";
            cardsflipped = 2;
            score++;
            document.getElementById("myscore").innerHTML = score;
        }
        else{
            alert('not a match!');
            cardonetype = 0;
            cardtwotype = 0;
            document.getElementById(flippedone).firstChild.innerHTML = "";
            document.getElementById(flippedtwo).firstChild.innerHTML = "";
            document.getElementById(flippedone).style.background = "none";
            document.getElementById(flippedtwo).style.background = "none";
            document.getElementById(flippedone).style.backgroundImage = "url('reference/card.png')";
            document.getElementById(flippedtwo).style.backgroundImage = "url('reference/card.png')";
            cardsflipped = 1;

        }
    }
}