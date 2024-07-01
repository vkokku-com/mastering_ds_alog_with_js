/*
A list abstract data type (ADT)
A list is an ordered sequence of data. 
Each data item stored in a list is called an element.

# ADT List
------------
@ listSize (property) Number of elements in list
@ pos (property) Current position in list
@ length (property) Returns the number of elements in list
@ clear (function) Clears all elements from list
@ toString (function) Returns string representation of list
@ getElement (function) Returns element at current position
@ insert (function) Inserts new element after existing element
@ append (function) Adds new element to end of list
@ remove (function) Removes element from list
@ front (function) Sets current position to first element of list
@ end (function) Sets current position to last element of list
@ prev (function) Moves current position back one element
@ next (function) Moves current position forward one element
@ currPos (function) Returns the current position in list
@ moveTo (function) Moves the current position to specified position

*/

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;

    // Append: Adding an Element to a List
    function append(element) {
        this.dataStore[this.listSize++] = element;
    }

    // Find: Finding an Element in a List
    function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    // Remove: Removing an Element from a List
    function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    // Length: Determining the Number of Elements in a List
    function length() {
        return this.listSize;
    }

    // toString: Retrieving a List’s Elements
    function toString() {
        return this.dataStore;
    }

    // Insert: Inserting an Element into a List
    function insert(element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }

    // Clear: Removing All Elements from a List
    function clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    // Contains: Determining if a Given Value Is in a List
    function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    // Traversing a List
    function front() {
        this.pos = 0;
    }

    function end() {
        this.pos = this.listSize - 1;
    }

    function prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }

    function next() {
        if (this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

    function currPos() {
        return this.pos;
    }

    function moveTo(position) {
        this.pos = position;
    }

    function getElement() {
        return this.dataStore[this.pos];
    }

}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
names.front();
console.log(names.getElement()); // displays Clayton
names.next();
console.log(names.getElement()); // displays Raymond
names.next();
names.next();
names.prev();
console.log(names.getElement()); // displays Cynthia

// Iterating Through a List
for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}

for (names.end(); names.currPos() >= 0; names.prev()) {
    console.log(names.getElement());
}
