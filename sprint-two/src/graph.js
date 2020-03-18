

// Instantiate a new graph
var Graph = function() {
  this.array=[];
  this.edges={};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.array.push(node)

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if(this.array.includes(node)){
    return true;
  }
  else{
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.array.indexOf(node)
  for(var i =index; i < this.array.length; i++) {
    this.array[i] = this.array[i + 1];
  }
  var nodeVal = this.edges[node];
  delete this.edges[node];
  delete this.edges[nodeVal]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var arr=Object.keys(this.edges)
  var arr1=Object.values(this.edges)

  for(var i = 0; i < arr.length; i++) {
    if((Number(arr[i])===fromNode)&&(Number(arr1[i])===toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.s
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode] = toNode;
  this.edges[toNode] = fromNode
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode];
  delete this.edges[toNode]
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for(var i = 0; i < this.array; i++) {
    cb(this.array[i])
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


