/**
 * Created by anthonyrogers on 6/8/16.
 */
function linkedList(){
    this.head = null;
}
linkedList.prototype.push = function(val){
    var node={
        value: val,
        next: null
    }

    if(!this.head){
        this.head = node;
    }
    else{
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }

};

var monkeys = new linkedList();

monkeys.push(2);
monkeys.push(3);
monkeys.push(4);

console.log(monkeys);