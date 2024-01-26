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

  unshift(item) {
    if (!this.head) {
      this.push(item);
    } else {
      const nodeItem = new Node(item);
      const currentHead = this.head;
      nodeItem.next = currentHead
      this.head = nodeItem;
      this.length++;
    }
  }

  get(index) {
    if (!this.head || index >= this.length) return null;
    if (index === 0) return this.head;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    if (index >= this.length) return null;
    if (!this.head) {
      this.push(val);
    }
    const currentItem = this.get(index);
    if (currentItem) {
      currentItem.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !! this.unshift(val);
    console.log("*** index", index, this.length)
    if (!this.head || index === this.length) {
      this.push(val);
    } else {
      const previousItem = this.get(index - 1);
      const currentItem = previousItem.next;
      const newNode = new Node(val);
      newNode.next = currentItem;
      previousItem.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousItem = this.get(index - 1);
    const currentItem = previousItem.next;
    previousItem.next = currentItem.next;
    this.length--;
    return currentItem;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev;
    // [25,50,75,100]
    for (let i = 0; i < this.length; i++) {
      next = node.next; //50
      node.next = prev; // 25 -> null
      prev = node; //25
      node = next; //50
    }
    return this;
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
sll.unshift("100");

// console.log("******* SLL ********");
// console.log(JSON.stringify(sll, null, 2));
// console.log("***************");

// console.log("******* Traverse ********");
// sll.traverse();
// console.log("***************");

// console.log("******* Pop ********");
// console.log(sll.pop());
// console.log(sll.pop());
// console.log(sll.pop());
// console.log("***************");

// console.log("******* Shift ********");
// console.log(sll.shift());
// console.log(sll.shift());
// console.log("***************");

// console.log("******* Get ********");
// console.log(sll.get(3));
// console.log("***************");

// console.log("******* Set ********");
// console.log(sll.set(4, 190));
// console.log("***************");

// console.log("******* Insert ********");
// console.log(sll.insert(1, 190));
// console.log(sll.insert(0, "FIRST"));
// console.log(sll.insert(3, "LAST"));
// console.log("***************");

// console.log("******* Remove ********");
// console.log(sll.remove(4));
// console.log("***************");

console.log("******* Reverse ********");
console.log(sll.reverse());
console.log("***************");