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

var thisList = ['Python', 'Django', 'HTML 5', 'Web Development', 'Corporate training',];
    document.getElementById('thisId').innerHTML = thisList.toString();

var thisCallBack = function (thisArray){
    document.getElementById('thisId').innerHTML = thisArray.toString();
};
    toUpperArrayAsync(thisList, thisCallBack);

/*var p1 = new Promise(function(resolve, reject) {
    console.log.('before the promise resolves');
    window.setTimeout(
        function() {
            var notSure = false;
            if (notSure){
                reject('something broke');
            }
            resolve(thisPromiseCount);
            resolve(['pig', 'bird', 'Lizard', 'goat'])
        }, Math.random() * 3000 + 2000);
}
var onSuccess = function(data){
    document.getElementById('promiseThis').innerHTML = data.toString();
    /*while(true){
     alert('die');
     }*/
/*};
var onError = function(error){
    document.getElementById('promiseThis').innerHTML = error.massage();
};
promise.then(onSuccess, onError);

var onSuccessAgain = function(){
    document.getElementById('promiseThis').innerHTML = data[0];
};
promise.then(onSuccessAgain);

promise.catch(onException);

var onAll = function (allData){
    var firstPromiseData = allData[0];
};
var onAnyError = function (firstError){
    console.log(firstError.message);
};
promise.all(promise, promise1).then();*/

// May 13, 2016 Challenge

