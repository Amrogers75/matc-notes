/**
 * Created by anthonyrogers on 6/1/16.
 */
function Stack() {
    /**var bottomOfStack;
    var middleOfStack;
    var topOfStack;
    var stack = {
        bottomOfStack: '',
        bottomOfStack1: '',
        bottomOfStack2: '',
        bottomOfStack3: '',
        };**/
    var container = [];

    this.push=function (number) {

        if(typeof number == 'number' && number >= 0 && Number.isInteger(number)){
            container.push(number);
            //console.log(container);
            return true;
        }

        return false;

    };

    this.pop = function(){
        var number = container.pop();
        //console.log();
        return number;
    };

    this.size=function () {
        return container.length;
    };

    this.isEmpty = function () {
        return container.length == 0;
    }


}

