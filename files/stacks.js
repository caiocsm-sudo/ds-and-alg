let letters = [];
let word = 'balaclava';
let rword = '';

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (word === rword) {
  console.log('this word is a palindrome: ' + word + ' ' + rword);
} else {
  console.log('this word is not a palindrome: ' + word + ' ' + rword);
}

// Stack Class --------------------------------------------------------

class Stack {
  constructor() {
    this.stack = {};
    this.length = 0;
  }

  pop() {
    if (this.length === 0) return undefined;

    let result = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length--;
    return result;
  }

  push(item) {
    this.stack[this.length] = item;
    this.length++;
    return this;
  }

  size() {
    return this.length;
  }

  peek() {
    console.log(this.stack[this.length - 1]);
    return this.stack[this.length - 1];
  }

  empty() {
    return this.stack == [] ? 'Empty' : 'Not empty';
  }

  fullStack() {
    return this.stack;
  }
}

const list = new Stack();

list.push('minecraft');
list.push('LoL');
console.log(list.fullStack());

list.peek();
console.log(list.empty());
console.log(list.pop());
console.log(list.fullStack());
