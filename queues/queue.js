/**
 * Created by anthonyrogers on 6/6/16.
 */
function Queue(){
    this._oldestIndex = 1;
    this._newIndex = 1;
    this._storage = {};
}

Queue.prototype.size = function(){
    return this._newIndex - this._oldestIndex;
};

Queue.prototype.enqueue =function(data){
    this._storage[this._newIndex] = data;
    this._newIndex ++;
};

Queue.prototype.dqueue = function(){
    var oldestIndex = this._oldestIndex,
    newestIndex = this._newIndex,
    deletedData;

    if (oldestIndex !== newestIndex){
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
        
        return deletedData;
    }
};

var disqueue = new  Queue();
disqueue.enqueue("Ted");
disqueue.enqueue("Tim");
disqueue.enqueue("Tom");
console.log(disqueue.dqueue());
