var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if(!this._storage.includes(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if(this._storage.includes(item)) {
    return true;
  }
  else {
    return false;
  }
};

setPrototype.remove = function(item) {
  var index = 0;
  for(var i = 0; i < this._storage.length; i++) {
    if(this._storage[i] === item) {
      index = i;
    }
  }
  for(var i = index; i < this._storage.length; i++) {
    this._storage[i] = this._storage[i + 1]
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
