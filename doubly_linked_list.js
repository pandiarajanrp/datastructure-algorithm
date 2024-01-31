class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if(!this.head) return null;
    const removedItem = this.tail;
    
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedItem.prev;
      this.tail.next = null;
      removedItem.prev = null;
    }
   
    this.length--;
    return removedItem;
  }
  shift() {
    if (!this.head) return null;
    const removedItem = this.head; 
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedItem.next;
      this.head.prev = null;
      removedItem.next = null;
    }
    this.length--;
    return removedItem
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const dll = new DoublyLinkedList();
dll.push("25");

// dll.push("50");
// dll.push("75");
// dll.push("100");
// dll.push("125");
// dll.push("150");
// dll.push("175");
// dll.push("200");

//pop
//dll.pop()

//shift
//dll.shift()

//unshift
dll.unshift("50")