class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const nodeItem = new Node(item);
    if (!this.head) {
      this.head = nodeItem;
      this.tail = nodeItem;
    } else {
      this.tail.next = nodeItem;
      this.tail = nodeItem;
    }
    this.length++;
    return this;
  }

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let newTail;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    if (newTail) {
      this.tail = newTail;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current;
  }

  shift() {
    if (!this.head) return null;
    const current = this.head;

    this.head = current.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return current;
  }
}

const sll = new SingleLinkedList();
sll.push("25");
sll.push("50");
sll.push("75");
sll.push("100");
sll.push("125");
sll.push("150");
sll.push("175");
sll.push("200");

console.log("******* SLL ********");
console.log(JSON.stringify(sll, null, 2));
console.log("***************");

console.log("******* Traverse ********");
sll.traverse();
console.log("***************");

console.log("******* Pop ********");
console.log(sll.pop());
console.log(sll.pop());
console.log(sll.pop());
console.log("***************");

console.log("******* Shift ********");
console.log(sll.shift())
console.log(sll.shift())
console.log("***************");