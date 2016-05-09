/**
 * Created by anthonyrogers on 5/6/16.
 */

function runPage(){
    var timeOfDay = "8pm";

    switch (timeOfDay){
        case "8pm":
            alert("Good Day");
            break;
        case "7am":
            alert("Get up");
    }

}

function clownShoes() {
    var quote = "one";

    switch (quote) {
        case "one":
            alert("Happy Monkey Eats Bananas");
            break;
        case "two":
            alert("Get up");
    }
}
function text() {

    for(var i = 0; i<12; i++){
        if(i === 0){break;}
        text += "Output is" +i;
    }
document.getElementById("box").innerHTML=text;
}

var cat;
for(var i = 0; i < 5; i++) {
    continue;
    cat += "Output is" + i;

    document.getElementsByName("box").innerHTML = cat;
}


