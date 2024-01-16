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
}

const sll = new SingleLinkedList();
sll.push("25");
sll.push("50");
sll.push("75");
sll.push("100");
console.log("******* SLL ********");
console.log(JSON.stringify(sll, null, 2));
console.log("***************");
