/**
 * Created by anthonyrogers on 5/26/16.
 */
function test1(expnum){
    
    if(expnum >= 1 && expnum <= 20){
        return true;
    }
    else{
        return false;
    }
}

function logString(expString){
    if(expString.length >= 5){
        return true;
    }
    else{
        return false;
    }
}

console.log(test1(32));
console.log(test1(8));

console.log(logString("pie"));
console.log(logString("star diggy moon"));

QUnit.test( "hello test", function( assert ) {
    assert.ok( 1 == "1", "Passed!" );
});

