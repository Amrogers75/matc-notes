/**
 * Created by anthonyrogers on 5/25/16.
 */
// js maps key google--AIzaSyBT5dyrchSgRwVrsjLJ-UGOA6IggLZxfnc
var map;
function initMap(){
    var teelat = 40.428796888087;
    var teeOffLog = -111.907022595406;
    var flagLat = 40.4289071414682;
    var flagLog = -111.907022595406;

    var mapLat = (teeOffLog + flagLat);
    var mapLog = (teelat + flagLog);

    map = new google.maps.Map(document.getElementById('map'),{
        center: {lat: mapLat, lng: mapLog},
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });
    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: 'Uluru (Ayers Rock)'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });



    var flagImage = 'media/flag.png';
    var flagMarker = new google.maps.Marker({
        position: {lat: mapLat, lng: mapLog},
        map: map,
        icon: flagImage

    });

    var teeOffInfowindow = new google.maps.InfoWindow({
        content:`
        <div>
            <h2>Hole 18</h2>
            <h3>Yardage: 337</h3>
        </div>`
    });

    teeOffMarker.addListner('click',function() {
        teeOffInfowindow.open(map, teeOffMarker);

    });

    var teeImage = 'media/tee-off.png';
    var teeMarker = new google.maps.Marker({
        position: {lat: 40.428796888087, lng: -111.907022595406},
        map: map,
        icon: teeImage
    });
}

