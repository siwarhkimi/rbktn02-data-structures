var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
_.extend(newTree,treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var obj = {}

  this.children.push(value);
  return this.children

};

treeMethods.contains = function(target) {
};



/*
.children property, an array containing a number of subtrees
 .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
 A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
 */
