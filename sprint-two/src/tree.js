var Tree = function(value) {
  var newTree = {};
  newTree.value = value;


  // your code here
  newTree.children = [];  // fix me
_.extend(newTree,treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

 this.children.push(Tree(value))
};
//I don't know how many branches we have how to loop through the childreen
treeMethods.contains = function(target) {
  if(this.value===target) {
    return true;
  }
  else{
    return false

  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */