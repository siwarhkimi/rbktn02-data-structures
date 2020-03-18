var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numericKey = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    storage[numericKey] = value;
    numericKey++;
  };

  someInstance.pop = function() {
    var value = storage[numericKey-1];
    delete storage[numericKey-1]
    numericKey--;
    return value
  };

  someInstance.size = function() {
    if(numericKey>=0){
      return numericKey
    }
    else{
      return 0
    }
  };

  return someInstance;
};
