var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.keyNumeric = 0;
};

Stack.prototype.push = function(value) {
  this[this.keyNumeric] = value;
  this.keyNumeric++;
}
Stack.prototype.pop = function() {
if(this.keyNumeric>=0) {
  var val = this[this.keyNumeric - 1];
  delete this[this.keyNumeric - 1];
  this.keyNumeric--;
  return val;
}
}
Stack.prototype.size = function() {
  if(this.keyNumeric >= 0) {
    return this.keyNumeric;
  }
  else {
    return 0;
  }
}

