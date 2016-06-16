/**
 * Created by anthonyrogers on 5/24/16.
 */
/**var aboutMe = '{"name":"Anthony", "street":"myaddress"}';
var obj = JSON.parse(aboutMe);

function doIt(){
    document.getElementById("stuff").innerHTML = obj.name;
}*/

function doIt() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState ==4 && xhttp.status == 200){
            var myobj = JSON.parse(xhttp.responseText);
            document.getElementById('stuff').innerHTML = myobj.daily[0];
        }
    };
    //xhttp.open("GET", "package.json", true);
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast/daily?q=Provo,US&cnt=10&APPID=6726e340def37d23dcf19e97808f1b4c", true);
    xhttp.send();
}
