class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  #root = null;

  constructor() {}

  insert(data) {
    const newNode = new TreeNode(data);
    if (this.#root === null) {
      this.#root = newNode;
      return;
    }
    let currentNode = this.#root;
    while (currentNode !== null) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  #find(data) {
    let currentNode = this.#root;
    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  isExist(data) {
    return this.#find(data) !== null;
  }

  inOrder(node = this.#root) {
    if (node !== null) {
      this.inOrder(node.left);
      this.#print(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.#root) {
    if (node !== null) {
      this.#print(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.#root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.#print(node.data);
    }
  }

  #print(data) {
    if (typeof window === "undefined") {
      process.stdout.write(data + " ");
    } else {
      console.log(data);
    }
  }

  height() {
    return this.#internalHeight(this.#root);
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

  printTreeShape() {
    if (this.#root === null) {
      console.log("Tree is empty");
      return;
    }

    let queue = [this.#root];
    let currentLevelNodes = 1;
    let nextLevelNodes = 0;

    while (queue.length > 0) {
      const node = queue.shift();
      currentLevelNodes--;

      process.stdout.write(node.data.toString() + " ");

      if (node.left !== null) {
        queue.push(node.left);
        nextLevelNodes++;
      }
      if (node.right !== null) {
        queue.push(node.right);
        nextLevelNodes++;
      }

      if (currentLevelNodes === 0) {
        console.log(); // Move to the next line for the next level
        currentLevelNodes = nextLevelNodes;
        nextLevelNodes = 0;
      }
    }
  }

  printShape() {
    if (!this.#root) {
      console.log("Tree is empty");
      return;
    }

    const queue = [this.#root];

    while (queue.length > 0) {
      const levelSize = queue.length;
      let levelNodes = "";

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        levelNodes += node.data + " ";

        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }

      console.log(levelNodes);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(6);

bst.inOrder();

console.log(bst.height());

console.log(bst.isExist(3));
