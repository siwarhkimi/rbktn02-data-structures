var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numericKey = 0;
  var deletedKey=0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[numericKey] = value;
    numericKey++;
  };

  someInstance.dequeue = function() {
    var value = storage[deletedKey];
    delete storage[deletedKey];
    deletedKey++;

    return value;
  };

  someInstance.size = function() {
    if(numericKey - deletedKey >= 0) {
      return numericKey - deletedKey;
    }
    else {
      return 0;
    }
  };

  return someInstance;
};
