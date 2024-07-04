let stackList = [];

stackList.push("1st");
stackList.push("2nd");
stackList.push("3rd");

console.log(stackList);

stackList.pop();
stackList.pop();
stackList.pop();

console.log(stackList);

//stackList with unshift and pop

stackList.unshift("First");
stackList.unshift("Second");
stackList.unshift("Third");

console.log(stackList);

stackList.shift();
stackList.shift();
stackList.shift();

console.log(stackList);

//stack using SLL

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return node;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}
