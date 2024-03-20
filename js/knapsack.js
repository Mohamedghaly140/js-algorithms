class Item {
  constructor(value, weight, name) {
    this.value = value;
    this.weight = weight;
    this.name = name;
    this.ratio = value / weight;
  }
}

class Knapsack {
  maxCapacity = 0;
  currentCapacity = 0;
  totalValue = 0;
  items = [];

  constructor(maxCapacity) {
    this.maxCapacity = maxCapacity;
  }

  addItem(newItem) {
    const diffCapacity = this.maxCapacity - this.currentCapacity;

    if (newItem.weight < diffCapacity) {
      newItem.weight = diffCapacity;
      newItem.value = diffCapacity * newItem.ratio;
    }

    this.items.push(newItem);
    this.currentCapacity += newItem.weight;
    this.totalValue += newItem.value;
  }
}
