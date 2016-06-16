/**
 * Created by anthonyrogers on 6/13/16.
 */

function dictionary(){
    this.add = add;
    this.datastore = {};
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
}
// function add needs to return 2 values
// return stores in value
function add(key, value){
    this.datastore[key] = value;
}

function find(key){
   return this.datastore[key];
}

function remove(key){
    delete this.datastore[key];
}

function showAll() {
    for(var key in this.datastore){
        console.log(key + "->" + this.datastore[key]);
    }
}
var mypbook = new dictionary();

mypbook.add("Mike", "555-5555");
mypbook.add("Julie", "333-3333");
mypbook.add("Fred", "444-4444");
console.log("mikes number is:" + mypbook.find("Mike"));
mypbook.remove("Mike");
mypbook.showAll();


// tue. 06/14/16 data structure

// constructor 1
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

//constructor 2
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
}

function show(){
    return this.data;
}

function insert(data){
    var n = new Node(data, null, null);
    if(this.root === null){
        this.root = n;
    }
    else{
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current === null){
                    parent.left = n;
                    break;
                }
            }
            else{
                current = current.right;
                if(current === null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

function inOrder(node) {
    if(node !== null){
        inOrder(node.left);
        console.log(node.show() + "");
        inOrder(node.right);
    }
}

// BST is binary search tree
var num = BST();
num.insert(45);
num.insert(36);
num.insert(2);
num.insert(88);
num.insert(24);
num.insert(18);

console.log("inOrder traversal:");
num.inOrder(num.root);