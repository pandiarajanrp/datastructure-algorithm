class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return node;
    }

    //check left node
    let current = this.root;
    while (true) {
      //check in left
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
        // check in the right
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
        // check the value already exist
      } else {
        return null;
      }
    }
  }
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(4);
bst.insert(11);
bst.insert(6);
bst.insert(17);
