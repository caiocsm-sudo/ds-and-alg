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
