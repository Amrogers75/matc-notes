/**
 * Created by anthonyrogers on 5/16/16.
 */
var str="I Love Halloween Candy";
var patt=/Halloween/i;
var sr=str.search(patt);
//alert(sr);


var sp="I love coming to class because JS is so much fun 2 learn";
var qx=/J/m;
var pr=sp.match(qx);
//alert(pr);


// notes for 5-17-16
// prototype/constructor
function Vehicle(engineType, color, numberOfDoors){
    this.engineType = engineType;
    this.color = color;
    this.numberOfDoors = numberOfDoors;
}
 var myVehichle = new Vehicle ('4Cylinder', 'brightBlue', '5');

//subclass from the prototype/constructor
function Truck(engineType, color, numberOfDoors, bedSize, offRoad) {
    Vehicle.call(this, engineType, color, numberOfDoors);
    this.bedSize = bedSize;
    this.offRoad = offRoad;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

var myTruck= new Truck('8Cylinder', 'brightBlue', '6', '6\'',true);
//alert(myTruck.toString());

// notes for 5-19-16
function validateForm() {
    var MIN_LENGTH = 1;
    //var x = document.forms["myForm"]["fname"].value;
    var street = document.forms["myForm"]["street"].value;
    var city = document.forms["myForm"]["city"].value;
    var state = document.forms["myForm"]["state"].value;
    var zipCode = document.forms["myForm"]["zipCode"].value;
    
    try {
        for (var i = 0; i < form.length - 1; i++) {
            if (form[i] == null || form[i] == undefined ||form[i].value.trim().length <= MIN_LENGTH) {
                throw "Liar Not Valid: " + form[i].name + "must be real" + form[i].name;
            }
        }
    }
    catch (error){
        document.getElementById("messageBox").innerHTML = error;
    }
}

// notes 5-20-16
// timer

var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

