var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.numericKey = 0;
  queue.deletedKey = 0;

  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
 // var numericKey = 0;
 queueMethods[this.numericKey] = value;
  this.numericKey = this.numericKey + 1;
 // console.log(this.numericKey )
}
queueMethods.dequeue = function() {
 // var deletedKey = 0;
  var value = queueMethods[this.deletedKey];

  delete queueMethods[this.deletedKey];
  this.deletedKey = this.deletedKey + 1;
  return value;
}
queueMethods.size = function() {
  if(this.numericKey - this.deletedKey >= 0) {
    return this.numericKey - this.deletedKey;
  }
  else {
    return 0;
  }
}
