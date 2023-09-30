// sets doesn't contain duplicate items and is not arranged in a specific order;

const mySet = function () {
  // hold the set
  let collection = [];

  /*
   * @param any
   * @return number
   */

  this.has = function (el) {
    return collection.indexOf(el) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.add = function (el) {
    if (this.has(el)) return false;
    collection.push(el);
    return true;
  };

  this.remove = function (el) {
    if (this.has(el)) {
      let index = collection.indexOf(el);
      // take out the element of the array, independent of where it is
      // splice functionality = (1st: index, 2nd: deleteCount, 3rd: element1 4th: element2 and -> +++);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  // method that returns the union of 2 sets
  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((el) => {
      unionSet.add(el);
    });
    secondSet.forEach((el) => {
      unionSet.add(el);
    });
    return unionSet;
  };

  // will return the intersection of two sets into another set
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((el) => {
      if (otherSet.has(el)) intersectionSet.add(el);
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach((el) => {
      if (!otherSet.has(el)) differenceSet.add(el);
    });
    return differenceSet;
  };

  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every((e) => {
      return otherSet.has(e);
    });
  };
};

const mset = new mySet();
const myOtherSet = new mySet();

mset.add("a");
mset.add("e");
mset.add("s");
myOtherSet.add("a");
myOtherSet.add("o");
myOtherSet.add("d");
myOtherSet.add("b");

let intersection = mset.intersection(myOtherSet);
let difference = mset.difference(myOtherSet);

console.log(intersection.values());
console.log(difference.values());
console.log(mset.subset(myOtherSet));
console.log(mset.values());

console.log(mset.has("bushcraft"));
console.log(mset.size());
