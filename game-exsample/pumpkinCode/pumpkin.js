// JavaScript Document


var gametitle = "Pumpkin Game";
var pumpkinpatch = "";
var numpumpkins = 0;
document.getElementById("title").innerHTML = gametitle;
document.getElementById("numbertitle").innerHTML = numpumpkins;

function addPumpkin(event) {
	
	var xAdjust = 290;
	var yAdjust = 12;
	var x = event.clientX - xAdjust;
    var y = event.clientY + yAdjust;
	var randomPumpkin = Math.floor((Math.random() * 4) + 1);
	pumpkinpatch += "<div class='pumpkin" + randomPumpkin + "' style='left: " + x + "px; top:" + y + "px;'></div>";
	document.getElementById("container").innerHTML = pumpkinpatch;
	numpumpkins++;
	document.getElementById("numbertitle").innerHTML = numpumpkins;
	
	// xAdjust = 360;
	// var yAdjust = 8;
}


//var gametitle = "Pumpkin Game";
 //numpumpkins = 0;



// ignore the code down here, it is Jquery.
$("#container").mousemove(function(e){
      $('.follow').css({'top': e.clientY + 20, 'left': e.clientX - 50});
});