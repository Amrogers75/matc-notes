/**
 * Created by anthonyrogers on 6/1/16.
 */
var stack;

beforeEach(function () {
    stack = new Stack();
});

describe('stack implementation', function () {

    describe('push', function () {

       it('increases the size of the stack', function () {
           stack.push(5674);
           expect(stack.size()).toEqual(1);
       });

        it('succeeds on a number input', function () {
            var success = stack.push(5674);
            expect(success).toBeTruthy();
            expect(stack.size()).toEqual(1);

        });

        it('fails on a string input', function () {
            var success = stack.push('&');
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0)
        });

        it('fails on a object input', function () {
            var success = stack.push('data');
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0)
        });

        it('fails on an array input', function () {
            var success = stack.push([4573, 5932, 6732]);
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0)
        });

        it('fails on a function input', function () {
            var success = stack.push(function () { });
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0)
        });

        it('fails on a negative input', function () {
            var success = stack.push(-5674);
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0)
        });

        it('fails on a decimal input', function () {
            var success = stack.push(0.4545);
            expect(success).toBeFalsy();
            expect(stack.size()).toEqual(0)
        });
    });

    describe('pop', function () {
        var number1=1;
        var number2=2;
        var number3=3;

        beforeEach(function () {
            stack= new Stack();
            stack.push(number1);
            stack.push(number2);
            stack.push(number3);
        });

        it('should decrease the size of the stack correctly', function () {
            var number = stack.pop();
            expect(stack.size()).toEqual(2);
        });

        it('should pop the correct sequence', function () {
            var firstNumber = stack.pop();
            var secondNumber = stack.pop();
            var thirdNumber = stack.pop();

            expect(firstNumber).toEqual(number3);
            expect(secondNumber).toEqual(number2);
            expect(thirdNumber).toEqual(number1);
        });

        it('should return undefined when stack is empty', function () {
            stack = new Stack();
            expect(stack.size()).toEqual(0);

            var number = stack.pop();

            expect(number).toEqual(undefined);


        it('should increase the size of the stack correctly', function () {
            var number = stack.pop();
            expect(number).toEqual(2);
        });

    });
});


describe('size', function () {

    it('should return the right size', function () {

        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.size()).toEqual(3);

        stack.push(43513);

        expect(stack.size()).toEqual(4);
    });
});


describe('isEmpty', function () {

        it('should return true when stack is empty', function () {
            expect(stack.size()).toEqual(0);

            expect(stack.isEmpty()).toBeTruthy();
        });

        it('should return false when stack is not empty', function () {
            stack.push(5674);

            expect(stack.size()).toEqual(1);

            expect(stack.isEmpty()).toBeFalsy();
        });
    });
});
