class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0) {
      return null;
    }

    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (currentIndex === index) {
        return current;
      }
      current = current.nextNode;
      currentIndex++;
    }
    return null;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (!this.head.nextNode) {
      const removeNode = this.head;
      this.head = null;
      return removeNode;
    }

    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    const removedNode = current.nextNode;
    current.nextNode = null;
    return removedNode;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let currentIndex = 0;

    while (current) {
      if (current.value === value) {
        return currentIndex;
      }
      current = current.nextNode;
      currentIndex++;
    }

    return null;
  }

  toString() {
    let current = this.head;
    let result = '';

    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += 'null';
    return result;
  }



  display() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.nextNode;
    }
    console.log(values.join(" -> "));
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(50);
linkedList.append(60);
//linkedList.display();

linkedList.prepend(1);
linkedList.prepend(5);
linkedList.prepend(4);
linkedList.prepend(3);
linkedList.prepend(9);
linkedList.display();

console.log("Size of the list is: ", linkedList.size());

const firstNode = linkedList.head;
console.log("First node is: ", firstNode.value);

const nodeAtIndex = linkedList.at(2);
if (nodeAtIndex) {
  console.log("Value of the node at index 2:", nodeAtIndex.value);
} else {
  console.log("Index is out of bounds.");
}

const removedNode = linkedList.pop();
if (removedNode) {
  console.log("Removed node value:", removedNode.value);
} else {
  console.log("List is empty.");
}

console.log(linkedList.contains(50));
console.log(linkedList.contains(30));

console.log(linkedList.find(50));
console.log(linkedList.find(30));

console.log(linkedList.toString());
