// queue = first in first out != first in last out (stacks)

const Queue = function () {
  let collection = [];
  this.enqueue = function (el) {
    return collection.push(el);
  };
  this.dequeue = function () {
    return collection.shift();
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
};

let q = new Queue();

const PriorityQueue = function () {
  let collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (el) {
    if (this.isEmpty()) {
      collection.push(el);
    } else {
      let added = false;
      for (let i = 0; i < collection.length; i++) {
        if (el[1] < collection[i][1]) {
          collection.splice(i, 0, el);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(el);
      }
    }
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
  this.dequeue = function() {
    let value = collection.shift();
    return value;
  }
  this.front = function() {
    return collection[0];
  }
  this.size = function() {
    return collection.length;
  }
};

const priority = new PriorityQueue();

priority.enqueue(['vanilla js', 2])
priority.enqueue(['vanilla php', 3]);
priority.enqueue(['vanilla c', 1]);
priority.enqueue(['vanilla java', 3]);

priority.printCollection();
