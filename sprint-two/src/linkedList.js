var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if(this.head === null) {
      this.tail = newNode;
    }
    else {
      var current = this.head;
      while(current.next){
        current = current.next;
      }
       current.next = newNode;
       this.tail = newNode;
    }
  };

  list.removeHead = function() {
    if(this.head !== null) {
      var val = this.head.value;
      var nextNode = this.head.next;
      this.head = nextNode;

      return val;
    }
  };

  list.contains = function(target) {
    var current = this.head;

    if(current === null) {
      return false;

    }
    else if(this.tail.value===target) {
      return true;
    }
    else {
      while(current.next!==null){
        if(current.value === target) {
          return true;
        }
        else {
          current = current.next;
        }
      }
      return false;
    }
  };

  return list;

};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*addToTail() method, takes a value and adds it to the end of the list
 .removeHead() method, removes the first node from the list and returns its value
 .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
 What is the time complexity of the above functions?
 */
