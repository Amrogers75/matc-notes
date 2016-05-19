/**
 * Created by anthonyrogers on 5/18/16.
 */
function runStuff(){
    document.getElementsByClassName('fox')[0].style.backgroundColor ='red';
    document.getElementsByClassName('fox')[1].style.backgroundColor ='#24AC22';

    document.getElementById('link').setAttribute('href', 'www.google.com');
    document.getElementById('image').setAttribute('src', 'media/explicit-warning.png');

    document.getElementById('container').innerHTML += "<div>Stuff</div>";
}


