// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  myAppend(value) {
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    node.next = { value, next: null };
    this.tail = node.next;
    this.length++;
  }

  myPrepend(value) {
    const oldLinkedList = { ...this.head };
    this.head = { value, next: oldLinkedList };
    this.length++;
  }

  myInsert(index, value) {
    let actualIndex = 0;
    let node = this.head;

    if (index === 0) {
      return this.prepend(value);
    } else if (index >= this.length) {
      return this.append(value);
    }

    while (actualIndex != index) {
      node = node.next;
      actualIndex++;
    }

    const oldNode = { ...node };
    node.value = value;
    node.next = oldNode;

    if (this.length - 1 === index) {
      this.tail = oldNode;
    }

    this.length++;
  }

  myRemove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let node = this.traverseToIndex(index);

    if (node === this.tail) {
      const nodeBeforeTail = this.traverseToIndex(this.length - 2);
      nodeBeforeTail.next = null;
      this.tail = nodeBeforeTail;
    } else {
      const nextNode = node.next;
      node.value = nextNode.value;
      node.next = nextNode.next;
    }
    this.length--;
  }

  myReverse() {
    const array = this.printList();
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let i = array.length - 1; i >= 0; i--) {
      if (i === array.length - 1) {
        this.head = {
          value: array[i],
          next: null,
        };
        this.tail = this.head;
        this.length = 1;
      } else {
        this.append(array[i]);
      }
    }
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    if (index >= this.length) {
      return this.tail;
    }

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.reverse();
