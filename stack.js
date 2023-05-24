/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor(vals=[]) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for (let val of vals) this.push(val);
  }
  /** push(val): add new value to end of the stack. Returns undefined. */
  push(val) {
    let newFirst = new Node(val);
    if(this.first){
      newFirst.next = this.first;
      this.first = newFirst;
    }
    else if(!this.first){
      this.last = newFirst;
      this.first = newFirst;
    }
    this.size ++;
    return undefined;
  }
  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if(!this.first){
      throw new Error("Cannot execute dequeue operation, the stack is empty");
    }
    else if(this.first == this.last){
      let val = this.first.val;
      this.first = null;
      this.last = null;
      this.size --;
      return val;
    }
    let oldFirst = this.first;
    let newFirst = oldFirst.next;
    this.first = newFirst;
    this.size --;
    return oldFirst.val;
  }
  /** peek(): return the value of the first node in the stack. */
  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    if(!this.first && !this.last && this.size == 0){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports = Stack;
