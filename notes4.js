/**
 * Created by anthonyrogers on 5/9/16.
 */

function toUpperArrayAsync(array, callback) {
    setTimeout(
        function (){
    // mod the array
    for (var i = 0; i < array.length; i++) {
        var thisString = array[i];
        array[i] = thisString.toUpperCase();
    }

    // tell when ready
    callback(array);
        },
        7000
    );

}

var thisList = ['frog', 'lizard', 'fish', 'turtle'];
    document.getElementById('thisId').innerHTML = thisList.toString();

var thisCallBack = function (thisArray){
    document.getElementById('thisId').innerHTML = thisArray.toString();
};
    toUpperArrayAsync(thisList, thisCallBack);




