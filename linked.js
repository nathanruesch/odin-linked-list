class LinkedList {
    nodes = [];

    constructor() {
    }

    append(value) {
        let newNode = new Node(value, null);

        if (this.nodes.length > 0) {
            this.nodes[this.nodes.length - 1].nextNode = newNode;
        }
        

        this.nodes.push(newNode);
    }

    prepend(value) {
        // Creates a new node with value value and a nextNode of the current head
        let newNode = new Node(value, this.nodes[0]);

        this.nodes.unshift(newNode);
    }

    size() {
        return this.nodes.length;
    }

    head() {
        if (this.nodes.length > 0) {
            return this.nodes[0].value;
        } else {
            return null;
        }
    }

    tail() {
        if (this.nodes.length > 0) {
            return this.nodes[this.nodes.length - 1].value;
        } else {
            return null;
        }
    }

    at(index) {
        if (this.nodes[index] === null) {
            console.log("ERROR: Tried to get invalid index in linked list");
            return;
        }

        return this.nodes[index];
    }

    pop() {
        // Remove the last element
        this.nodes.pop();

        // Ensure the new tail node has null as the next node
        this.nodes[this.nodes.length - 1].nextNode = null;
    }

    contains(value) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].value === value) {
                return true;
            }
        }

        return false;
    }

    find(value) {
        for (let i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].value === value) {
                return i;
            }
        }

        return null;
    }

    toString() {
        let builtString = "";

        for (let i = 0; i < this.nodes.length; i++) {
            builtString += `( ${this.nodes[i].value} ) -> `
        }

        builtString += 'null';

        return builtString;
    }

    insertAt(value, index) {
        let newNode = new Node(value, this.nodes[index]);
        let temp = [...this.nodes.slice(0, index), newNode, ...this.nodes.slice(index)];
        this.nodes = temp;

        for (let i = 0; i < this.nodes.length - 1; i++) {
            this.nodes[i].nextNode = this.nodes[i + 1];
        }
    }

    removeAt(index) {
        let temp = [...this.nodes.slice(0, index), ...this.nodes.slice(index + 1)];
        this.nodes = temp;

        this.nodes[index - 1].nextNode = this.nodes[index];
    }

    listNodeConnections() {
        let builtString = "";

        for (let i = 0; i < this.nodes.length; i++) {
            builtString += `( ${this.nodes[i].value} - ${this.nodes[i].nextNode?.value} ) -> `;
        }

        return builtString;
    }
}

class Node {
    value = null;
    nextNode = null;

    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// Test initial construction and appending
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(list.listNodeConnections());

// Test prepending
list.prepend("mouse");

console.log(list.toString());
console.log(list.listNodeConnections());

// Test size, head, and tail
console.log(`Size: ${list.size()} --- Head: ${list.head()} --- Tail: ${list.tail()}`);

// Test at
// Should show cat
console.log(list.at(2));

// Test pop
list.pop();
list.pop();

console.log(list.toString());
console.log(list.listNodeConnections());

// Test contains
console.log(`Contains: ${list.contains("hamster")} --- Doesn't Contain: ${list.contains("airplane")}`);

// Test find
console.log(`Find: ${list.find("mouse")} --- No Find: ${list.find("airplane")}`);

// Test insertAt
list.insertAt("elephant", 3);
list.insertAt("human", 4);
console.log(list.toString());
console.log(list.listNodeConnections());

// Test removeAt
list.removeAt(2);
list.removeAt(4);
console.log(list.toString());
console.log(list.listNodeConnections());