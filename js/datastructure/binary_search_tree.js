class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinraySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  #insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.#insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.#insertNode(root.right, newNode);
      }
    }
  }

  search(value) {
    return this.#internalSearch(this.root, value);
  }

  #internalSearch(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.#internalSearch(root.left, value);
      } else {
        return this.#internalSearch(root.right, value);
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  height() {
    return this.#internalHeight(this.root);
  }

  #internalHeight(root) {
    if (root === null) return 0;
    return (
      Math.max(
        this.#internalHeight(root.left),
        this.#internalHeight(root.right)
      ) + 1
    );
  }
}

const bst = new BinraySearchTree();

console.log("Tree is empty?", bst.isEmpty());

bst.insert(3);
bst.insert(5);
bst.insert(6);
bst.insert(10);
bst.insert(15);
bst.insert(18);

console.log("10?", bst.search(10));
console.log("5?", bst.search(5));
console.log("15?", bst.search(15));
console.log("height?", bst.height());
// console.log("height?", bst.printTree());
