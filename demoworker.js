/**
 * Created by anthonyrogers on 5/20/16.
 */
var i = 0;

function timedCount() {
    i = i +1;
    postMessage(i);
    setTimeout("timedCount()",500);
}
timedCount();
