class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.key = 0;
  }
  push(value) {
    this[this.key] = value;
    this.key++;
  }
  pop() {
    if(this.key >= 0) {
      var value = this[this.key - 1];
    delete this[this.key - 1];
    this.key--;
    return value;
    }
  }
  size() {
    if(this.key >= 0) {
      return this.key;
    }
    else{
      return 0;
    }
  }

}