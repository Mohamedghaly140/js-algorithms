class Heap {
  #dataList;
  #size;

  constructor() {
    this.#dataList = [];
    this.#size = 0;
  }

  insert(data) {
    let i = this.#size;
    this.#dataList[i] = data;
    this.#size++;

    let parentIndex = Math.floor((i - 1) / 2);
    while (i != 0 && this.#dataList[i] < this.#dataList[parentIndex]) {
      this.#dataList[i] = this.#dataList[parentIndex];
      this.#dataList[parentIndex] = data;
      i = parentIndex;
      parentIndex = Math.floor((i - 1) / 2);
    }
  }

  pop() {
    if (this.#size == 0) return null;
    let i = 0;
    let data = this.#dataList[i];

    this.#dataList[i] = this.#dataList[this.#size - 1];
    this.#dataList[this.#size - 1] = null;
    this.#size--;

    let leftIndex = 2 * i + 1;
    while (leftIndex < this.#size) {
      let right_index = 2 * i + 2;

      let smallerIndex = leftIndex;
      if (
        this.#dataList[right_index] != null &&
        this.#dataList[right_index] < this.#dataList[leftIndex]
      ) {
        smallerIndex = right_index;
      }

      if (this.#dataList[smallerIndex] >= this.#dataList[i]) {
        break;
      }

      let temp = this.#dataList[i];
      this.#dataList[i] = this.#dataList[smallerIndex];
      this.#dataList[smallerIndex] = temp;

      i = smallerIndex;
      leftIndex = 2 * i + 1;
    }

    return data;
  }

  print() {
    let print_data = "";
    for (let i = 0; i < this.#size; i++) {
      print_data += this.#dataList[i] + " - ";
    }
    console.log(print_data);
  }
  size() {
    return this.#size;
  }

  draw() {
    let levelsCount = Math.log2(this.#size) + 1;
    let lineWidth = Math.pow(2, levelsCount - 1);

    let j = 0;
    for (let i = 0; i < levelsCount; i++) {
      let nodes_count = Math.pow(2, i);
      let space = Math.ceil(lineWidth - nodes_count / 2);
      let space_between = Math.ceil(levelsCount / nodes_count);
      space_between = space_between < 1 ? 1 : space_between;
      let k = j;
      let str = " ".repeat(space + space_between);
      for (; j < k + nodes_count; j++) {
        if (j == this.#size) {
          break;
        }
        if (this.#dataList[j]) {
          str += this.#dataList[j] + " ".repeat(space_between);
        }
      }
      str += " ".repeat(space) + "\n";
      console.log(str);
    }
  }
}

const heap = new Heap();

heap.insert(24);
heap.insert(32);
heap.insert(16);
heap.insert(45);
heap.insert(20);
heap.insert(53);
heap.insert(14);
heap.insert(27);

heap.draw();
