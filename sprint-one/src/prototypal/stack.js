var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack=Object.create(stackMethods);
  stack.keyNumeric = 0;
  return stack;
};

var stackMethods = {};
stackMethods.push = function(value) {
  stackMethods[this.keyNumeric] = value;
  this.keyNumeric++;
}
stackMethods.pop = function() {
  if(this.keyNumeric >= 0) {
    var value = stackMethods[this.keyNumeric - 1];
    delete stackMethods[this.keyNumeric - 1];
    this.keyNumeric--;

    return value;
  }
}
stackMethods.size = function() {
  if(this.keyNumeric >= 0) {
    return this.keyNumeric;
  }
  else {
    return 0;
  }
}


