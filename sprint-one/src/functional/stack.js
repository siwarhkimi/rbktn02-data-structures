var Stack = function() {
  var storage={};

  storage.numericKey=0;
  //console.log(storage)
  _.extend(storage, stackMethods)
  return storage;
};

var stackMethods = {};
stackMethods.push=function(value) {
  stackMethods[this.numericKey]=value;
  this.numericKey++
}
stackMethods.pop=function() {
  if(this.numericKey>=0){
    var val = stackMethods[this.numericKey-1];
    delete stackMethods[this.numericKey-1];
    this.numericKey--
    return val;
  }

}
stackMethods.size=function(){
  if(this.numericKey>=0) {
    return this.numericKey;
  }
  else{
    return 0
  }
}


