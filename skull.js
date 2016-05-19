/**
 * Created by anthonyrogers on 5/18/16.
 */
function runstuff(){
    var thecounter = document.getElementById("counter");

    var skullarray = document.getElementsByClassName("skull");
    thecounter.value = skullarray.length;

    for (var i = 0; i < skullarray.length; i++) {
        skullarray[i].setAttribute("id", ("myskull" + i));
        skullarray[i].setAttribute("onclick", "removeSkull(this)");
    }

}
function removeSkull(incomingskull){
    var newarry = document.getElementsByClassName("skull");
    var thecontainer = document.getElementById("container");
    var thecontainer = document.getElementById("container");
    thecontainer.removeChild(incomingskull);
    thecounter.value = newarry.length;
}