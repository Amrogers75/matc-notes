/**
 * Created by anthonyrogers on 5/20/16.
 */
var w;

function makeitSo(){
    if(typeof (Worker) !=="undefined"){
        if(typeof (w)=="undefined"){
            w = new Worker("demoworker.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
        }
    else{
        document.getElementById("result").innerHTML = "Sorry IE sucks, Go fish!";
        }
    }
function DangitJim(){
    w.terminate();
    w = undefined;

}