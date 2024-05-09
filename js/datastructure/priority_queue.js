class PriorityQueue {
  #dataList;
  #size;

  constructor() {
    this.#dataList = [];
    this.#size = 0;
  }

  enqueue(priority, data) {
    let i = this.#size;
    this.#dataList[i] = { priority: priority, data: data };
    this.#size++;
    let parent_index = Math.floor((i - 1) / 2);
    while (
      i != 0 &&
      this.#dataList[i].priority < this.#dataList[parent_index].priority
    ) {
      let temp = this.#dataList[i];
      this.#dataList[i] = this.#dataList[parent_index];
      this.#dataList[parent_index] = temp;
      i = parent_index;
      parent_index = Math.floor((i - 1) / 2);
    }
  }

  dequeue() {
    if (this.#size == 0) return null;
    let i = 0;
    let data = this.#dataList[i].data;
    let priority = this.#dataList[i].priority;

    //copy last node to root
    this.#dataList[i] = this.#dataList[this.#size - 1];

    //delete last node
    this.#dataList[this.#size - 1] = null;
    this.#size--;

    let left_index = 2 * i + 1;
    while (left_index < this.#size) {
      let right_index = 2 * i + 2;

      let smaller_index = left_index; //just initial value;
      if (
        this.#dataList[right_index] != null &&
        this.#dataList[right_index].priority <
          this.#dataList[left_index].priority
      ) {
        let smaller_index = right_index;
      }
      if (
        this.#dataList[smaller_index].priority >= this.#dataList[i].priority
      ) {
        break;
      }

      //swap
      let temp = this.#dataList[i];
      this.#dataList[i] = this.#dataList[smaller_index];
      this.#dataList[smaller_index] = temp;

      i = smaller_index;
      left_index = 2 * i + 1;
    }

    return [data, priority];
  }

  hasData() {
    return this.#size > 0;
  }
  print() {
    let print_data = "";
    for (let i = 0; i < this.#size; i++) {
      print_data += this.#dataList[i].data + " - ";
    }
    console.log(print_data);
  }
  size() {
    return this.#size;
  }

  draw() {
    let levels_count = Math.log2(this.#size) + 1;
    let line_width = Math.pow(2, levels_count - 1);

    let j = 0;
    for (let i = 0; i < levels_count; i++) {
      let nodes_count = Math.pow(2, i);
      let space = Math.ceil(line_width - nodes_count / 2);
      let space_between = Math.ceil(levels_count / nodes_count);
      space_between = space_between < 1 ? 1 : space_between;
      let k = j;
      let str = " ".repeat(space + space_between);
      for (; j < k + nodes_count; j++) {
        if (j == this.#size) {
          break;
        }
        if (this.#dataList[j]) {
          str +=
            this.#dataList[j].data +
            "[" +
            this.#dataList[j].priority +
            "]" +
            " ".repeat(space_between);
        }
      }
      str += " ".repeat(space) + "\n";
      console.log(str);
    }
  }
}

const queue = new PriorityQueue();

queue.enqueue(5, 24);
queue.enqueue(5, 32);
queue.enqueue(3, 16);
queue.enqueue(3, 45);
queue.enqueue(1, 20);
queue.enqueue(1, 53);
queue.enqueue(2, 14);
queue.enqueue(2, 27);

queue.print();
queue.draw();

while (queue.hasData()) {
  const result = queue.dequeue();
  console.log(result[0] + "[" + result[1] + "]");
}
