/**
 * Created by anthonyrogers on 4/28/16.
 */

// create an array of food items for the monster to eat
var foodarr = ["Bubble Gum", "Taffy", "Cotton Candy", "Apples", "Avocado", "Bananas", "Pizza", "Bacon", "Corn Dog", "salad"];


// start the game with a function
function rungame(){
    var thefood = getfood();
    setfood(thefood);
}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    return foodarr[randomfood];
}

// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
    return currentfood[randomfood]
}

function eatit(){
    //if the food is good
    if(currentfood == "Bubble Gum" || currentfood == "Taffy" || currentfood == "Cotton Candy" || currentfood == "Pizza" || currentfood == "Bacon"){
        document.getElementById("commentbox").innerHTML = "Yumm Yumm!!!";
        var thefood = getfood();
        setfood(thefood);
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Gross are you trying to kill ME???";


    }

}

function trashit(){
    //if the food is good
    if(currentfood == "Bubble Gum" || currentfood == "Taffy" || currentfood == "Cotton Candy" || currentfood == "Pizza" || currentfood == "Bacon"){
        document.getElementById("commentbox").innerHTML = "Don't Trash the treats!";

    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Good it's Gone!";
        var thefood = getfood();
        setfood(thefood);
    }

}