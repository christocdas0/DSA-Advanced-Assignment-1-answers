class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(val) {
    this.items.push(val);
    this.length++;
  }
  pop() {
    if (this.items == null) {
      return null;
    }
    this.length--;
    return this.items.pop();
  }
  peek() {
    if (this.items == null) {
      return null;
    }
  }
}
class Node1 {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  add(value) {
    var node = new Node1(value);

    if (this.head == null) this.head = node;
    else {
      var current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  rotateByK(K, head = this.head) {
    var current = head;
    var next = null;
    var prev = null;
    var i = 0;
    while (i < K && current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i++;
    }

    if (next != null) head.next = this.rotateByK(K, next);

    return prev;
  }
}

class Node {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

// 1.) Delete the elements in an linked list whose sum is equal to zero

// *********//

// 2.) Reverse a linked list in groups of given size

var ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.add(60);
ll.add(70);

var rotateK = ll.rotateByK(3);
console.log(JSON.stringify(rotateK));

// **********//

// 3.)Merge a linked list into another linked list at alternate positions

function push(headRef, newData) {
  var node = new Node();
  node.data = newData;
  node.next = headRef;
  headRef = node;
  return headRef;
}

function printList(head) {
  var temp = head;
  while (temp != null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
}

function merge(p, q) {
  var pCurrent = p,
    qCurrent = q;
  var pNext, qNext;
  while (pCurrent != null && qCurrent != null) {
    pNext = pCurrent.next;
    qNext = qCurrent.next;
    qCurrent.next = pNext;
    pCurrent.next = qCurrent;
    pCurrent = pNext;
    qCurrent = qNext;
  }

  q = qCurrent;
  return q;
}

var p = null,
  q = null;
p = push(p, 3);
p = push(p, 2);
p = push(p, 1);
console.log("First Linked List:");
printList(p);
q = push(q, 8);
q = push(q, 7);
q = push(q, 6);
q = push(q, 5);
q = push(q, 4);
console.log("Second Linked List:");
printList(q);
q = merge(p, q);
console.log("Modified First Linked List:");
printList(p);
console.log("Modified Second Linked List:");
printList(q);

// *************////

// 4.) In an array, Count Pairs with given sum

function getPairsCount(arr, n, sum) {
  var count = 0;

  for (var i = 0; i < n; i++)
    for (var j = i + 1; j < n; j++) if (arr[i] + arr[j] == sum) count++;

  return count;
}

var arr = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
var n = arr.length;
var sum = 11;
console.log("Count of pairs is " + getPairsCount(arr, n, sum));

//  **********//

//  5.) Find duplicates in an array

var arr = [2, 3, 4, 2, 6, 7, 4, 3, 7, 4];

function findDuplicate(arr) {
  var sortedArr = arr.sort((a, b) => a - b);
  var duplicateArr = [];
  for (var i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] == sortedArr[i + 1]) {
      duplicateArr.push(arr[i + 1]);
    }
  }
  console.log(duplicateArr);
}

findDuplicate(arr);

// *************////

// 6.) Find the Kth largest and Kth smallest number in an array
var arr = [34, 99, 2, 5, 8, 10, 22, 300];
function findLargeAndSmallNUm(arr) {
  var sortedArr = arr.sort((a, b) => a - b);
  var smallNum = sortedArr[0];
  var largeNUm = sortedArr[sortedArr.length - 1];
  console.log(smallNum);
  console.log(largeNUm);
}

findLargeAndSmallNUm(arr);

// ************//

// 7.) Move all the negative elements to one side of the array

var arr = [20, -30, 43, -2, 40, -10];
function rearrange(arr) {
  var j = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }

  return arr;
}

console.log(rearrange(arr));

// **********///

// 8.) Reverse a string using a stack data structure

var str = "criz";

function reverseString(str) {
  var stack = new Stack();
  var res = [];

  for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  console.log(`Acutal String => ${stack.items.join("")}`);
  for (var j = 0; j < str.length; j++) {
    if (stack.items === null) {
      return null;
    }

    res.push(stack.pop());
  }
  return `Reversed String =>  ${res.join("")}`;
}
console.log(reverseString(str));

// ***********///

// 9 .) Evaluate a postfix expression using stack

function evaluatePostfix(exp) {
  var stack = new Stack();

  for (var i = 0; i < exp.length; i++) {
    var c = exp[i];

    if (!isNaN(parseInt(c))) stack.push(c.charCodeAt(0) - "0".charCodeAt(0));
    else {
      var val1 = stack.pop();
      var val2 = stack.pop();

      switch (c) {
        case "+":
          stack.push(val2 + val1);
          break;

        case "-":
          stack.push(val2 - val1);
          break;

        case "/":
          stack.push(val2 / val1);
          break;

        case "*":
          stack.push(val2 * val1);
          break;
      }
    }
  }
  return stack.pop();
}

var exp = "231*+9-";
console.log("postfix evaluation: " + evaluatePostfix(exp));

// ***********//

// 10.)Implement a queue using the stack data structure

class Queue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  enQueue(x) {
    while (this.s1.length != 0) {
      this.s2.push(this.s1.pop());
    }

    this.s1.push(x);

    while (this.s2.length != 0) {
      this.s1.push(this.s2.pop());
    }
  }

  deQueue() {
    if (this.s1.length == 0) {
      console.log("Q is Empty");
    }

    var x = this.s1[this.s1.length - 1];
    this.s1.pop();
    return x;
  }
}

var q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.enQueue(5);
q.enQueue(10);
console.log(q.deQueue());
console.log(q.deQueue());
console.log(q.deQueue());
