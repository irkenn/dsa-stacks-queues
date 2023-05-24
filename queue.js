/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor(vals=[]) {
    this.first = null;
    this.last = null;
    this.size = 0;

    for (let val of vals) this.enqueue(val);
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newLast = new Node(val);
    if(this.last){
      let oldLast = this.last;
      oldLast.next = newLast;
      newLast.previous = oldLast;
      this.last = newLast;
    }
    else if(!this.first){
      this.first= newLast;
      this.last= newLast;
    }
    this.size ++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(!this.first){
      throw new Error("Cannot execute dequeue operation, the queue is empty");
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
    newFirst.previous = null;
    this.first = newFirst;
    this.size --;
    return oldFirst.val;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    if(!this.first && !this.last && this.size == 0){
      return true;
    }
    else{
      return false;
    }
  }
}

module.exports = Queue;
