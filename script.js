class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  append(value) {
    let node = new Node(value);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
    this.length++;
  }

  printData() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }

  size() {
    return this.length;
  }

  giveHead() {
    return this.head;
  }

  tail() {
    let current;

    if (this.head === null) {
      return this.head;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    let current;

    if (this.head === null) {
      return;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }
      this.length--;
      return (current = null);
    }
  }

  contains(value) {
    let current;

    if (this.head === null) {
      return false;
    } else {
      current = this.head;

      while (current.nextNode) {
        if (current.value === value) {
          return true;
        }
        current = current.nextNode;
      }
      if (current.value === value) {
        return true;
      } else {
        return false;
      }
    }
  }

  find(value) {
    let current;
    let count = 0;

    if (this.head === null) {
      return 0;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
        count++;
        if (current.value === value) {
          return count;
        }
      }

      if (current.value === value) {
        return count;
      } else {
        return -1;
      }
    }
  }

  toString() {
    const result = [];
    let current;

    if (this.head === null) {
      return "Linked List is empty";
    } else {
      current = this.head;

      while (current.nextNode) {
        result.push(`${current.value} ->`);
        current = current.nextNode;
      }
      result.push(`${current.value} ->`);
      result.push(`${current.nextNode}`);

      return result.toString().replaceAll(",", " ");
    }
  }
}
