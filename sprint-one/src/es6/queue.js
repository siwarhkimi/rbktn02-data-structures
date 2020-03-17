class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.front = 0;
    this.rear = 0;
  }
enqueue(value) {
  this[this.rear] = value;
  this.rear++;
}
dequeue() {
 if(this.rear >= this.front) {
  var value = this[this.front];
  delete this[this.front];
  this.front++;
  return value;
 }
}
size() {
  if(this.rear >= this.front) {
    return this.rear - this.front;
  }
  else {
    return 0;
  }
}
}

