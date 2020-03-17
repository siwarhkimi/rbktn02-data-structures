var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.keyNumeric = 0;
  queue.deletedKey = 0;
  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  queueMethods[this.keyNumeric] = value;
  this.keyNumeric++;
}
queueMethods.dequeue = function() {
  if(this.keyNumeric - this.deletedKey) {
    var val = queueMethods[this.deletedKey];
    delete queueMethods[this.deletedKey];
    this.deletedKey++;
    return val;
  }

}
queueMethods.size= function() {
  if(this.keyNumeric - this.deletedKey) {
    return this.keyNumeric - this.deletedKey;
  }
  else {
    return 0;
  }
}


