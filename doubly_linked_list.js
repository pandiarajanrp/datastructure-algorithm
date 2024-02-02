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
    if (!this.head) return null;
    const removedItem = this.tail;

    if (this.length === 1) {
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
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedItem.next;
      this.head.prev = null;
      removedItem.next = null;
    }
    this.length--;
    return removedItem;
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
    return newNode;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    const mid = Math.ceil(this.length % 2);
    let current;
    if (index <= mid) {
      let idx = 0;
      current = this.head;
      while (idx !== index) {
        current = current.next;
        idx++;
      }
    } else {
      let idx = this.length - 1;
      current = this.tail;
      while (idx !== index) {
        current = current.prev;
        idx--;
      }
    }
    return current;
  }
  set(index, val) {
    const item = this.get(index);
    if (item) {
      item.val = val;
      return item;
    }
    return null;
  }
  insert(index, val) {
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);
    const newNode = new Node(val);
    const prevItem = this.get(index - 1);
    newNode.prev = prevItem;
    newNode.next = prevItem.next;
    prevItem.next = newNode;
    this.length++;
    return newNode;
  }
}

//0  1  2  3   4   5   6   7
//25 50 75 100 125 150 175 200

//4 -> 112

const dll = new DoublyLinkedList();
dll.push("25");
dll.push("50");
dll.push("75");
dll.push("100");
dll.push("125");
dll.push("150");
dll.push("175");
dll.push("200");

//pop
//dll.pop()

//shift
//dll.shift()

//unshift
//dll.unshift("50")

//get
// dll.get(4)

//set
// dll.set(5, "119")

//insert
dll.insert(4, "112")
dll.insert(0, "1")