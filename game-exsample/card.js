/**
 * Created by anthonyrogers on 5/2/16.
 */
var card = {name:'Anthony Rogers', phone:'801-709-4479', email:'butdad1@gmail.com'};

function showCard(){
    document.getElementById('name').innerHTML = card.name;
    document.getElementById('phone').innerHTML = card.phone;
    document.getElementById('email').innerHTML = card.email;
}
