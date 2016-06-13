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