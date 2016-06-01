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
           except(stack.size()).toEqual(1);
       });

        it('sucseeds on a number input', function () {
        });

        it('fails on not a number input', function () {
        });

        it('fails on a negative input', function () {
        });

        it('fails on a decimal input', function () {
        });
    });
    it('test', function () {
        expect(false).toBeFalsy();
    })
});