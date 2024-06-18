// Creating Arrays
var numbers = [];
console.log(numbers.length);

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);

var numbers = new Array();
console.log(numbers.length);

var numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers.length);

var numbers = new Array(10);
console.log(numbers.length);

var objects = [1, "Joe", true, null, {}, [], undefined];
console.log(objects.length);

var numbers = 3;
var arr = [7, 4, 1776];
console.log(Array.isArray(numbers));
console.log(Array.isArray(arr));

// Accessing & Writing Array Elements
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}
console.log('nums', nums);

var numbers = [1, 2, 3, 4, 5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] +
    numbers[4];
console.log('sum', sum);

var numbers = [1, 2, 3, 5, 8, 13, 21];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
    sum += numbers[i];
}
console.log('sum', sum);

// Creating Arrays from Strings
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
    console.log("word " + i + ": " + words[i]);
}

// Aggregate Array Operations
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = i + 1;
}
var samenums = nums;
console.log('nums', nums);
console.log('samenums', samenums);

/* Shallow Copy Example*/
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}
var samenums = nums;
nums[0] = 400;
console.log('samenums[0]:', samenums[0]); // displays 400

/* Deep Copy Example*/
function copy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}
var nums = [];
for (var i = 0; i < 100; ++i) {
    nums[i] = i + 1;
}
console.log('nums', nums);
var samenums = [];
copy(nums, samenums);
nums[0] = 400;
console.log('samenums[0]:', samenums[0]); // displays 1

// Accessor Functions

/* Seraching for a value*/
function search(value, arr) {
    var position = arr.indexOf(value);
    if (position >= 0) {
        console.log("Found " + value + " at position " + position);
    }
    else {
        console.log(value + " not found in array.");
    }
}

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
search("Cynthia", names);
search("Jane", names);


var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike",
    "Jennifer"];
var name = "Mike";
var firstPos = names.indexOf(name);
console.log("First found " + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos);


// String Represntation of Arrays
var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
console.log('namestr', namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString();
console.log('namestr', namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer

// Creating new arrays from existing arrays
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log('itDiv', itDiv);
var itDiv2 = dmpDept.concat(cisDept);
console.log('itDiv2', itDiv2);

var itDiv = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"];
var dmpDept = itDiv.splice(3, 3);
var cisDept = itDiv;
console.log('dmpDept', dmpDept); // Raymond,Cynthia,Danny
console.log('cisDept', cisDept); // Mike,Clayton,Terrill,Jennifer


/* Mutator Functions */
// Adding Elements to an array
var nums = [1, 2, 3, 4, 5];
console.log('nums', nums); // 1,2,3,4,5
nums.push(6);
console.log('nums', nums); // 1,2,3,4,5,6

// Using push() is more intuitive than using the length property to extend an array:
var nums = [1, 2, 3, 4, 5];
console.log(nums); // 1,2,3,4,5
nums[nums.length] = 6;
console.log(nums); // 1,2,3,4,5,6

//insert element at the beginning without unshift
var nums = [2, 3, 4, 5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
    nums[i] = nums[i - 1];
}
nums[0] = newnum;
console.log(nums); // 1,2,3,4,5

//Using unshift
var nums = [2, 3, 4, 5];
console.log(nums); // 2,3,4,5
var newnum = 1;
nums.unshift(newnum);
console.log(nums); // 1,2,3,4,5
nums = [3, 4, 5];
nums.unshift(newnum, 1, 2);
console.log(nums); // 1,1,2,3,4,5

//Removing elements from an array
var nums = [1, 2, 3, 4, 5, 9];
nums.pop();
console.log(nums); // 1,2,3,4,5

var nums = [9, 1, 2, 3, 4, 5];
console.log(nums);
for (var i = 0; i < nums.length; ++i) {
    nums[i] = nums[i + 1];
}
console.log(nums); // 1,2,3,4,5,
console.log(nums.length);

//Adding and removing elements from middle of an array
var nums = [1, 2, 3, 7, 8, 9];
var newElements = [4, 5, 6];
nums.splice(3, 0, newElements);
console.log(nums); // 1,2,3,4,5,6,7,8,9

//no need to pass newElements array
//adding elements using splice
var nums = [1, 2, 3, 7, 8, 9];
nums.splice(3, 0, 4, 5, 6);
console.log(nums);

//removing elements using splice
var nums = [1, 2, 3, 100, 200, 300, 400, 4, 5];
nums.splice(3, 4);
console.log(nums); // 1,2,3,4,5

/*Putting array elements in order*/
// using reverse
var nums = [1, 2, 3, 4, 5];
nums.reverse();
console.log(nums); // 5,4,3,2,1

//using sort on array of strings 
var names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
names.sort();
console.log(names); // Bryan,Clayton,Cynthia,David,Mike,Raymond

//using sort on array of numbers
var nums = [3, 1, 2, 100, 4, 200];
nums.sort();
console.log(nums); // 1,100,2,200,3,4

//for ascending order
function compareAsc(num1, num2) {
    return num1 - num2;
}

var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compareAsc);
console.log(nums); // 1,2,3,4,100,200

//for descending order
function compareDesc(num1, num2) {
    return num2 - num1;
}

var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compareDesc);
console.log(nums);

//Iterator Functions
//Non-Array generating Iterator functions
//forEach - method
function square(num) {
    console.log(num, num * num);
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nums.forEach(square);
console.log(nums);

//every - method
function isEven(num) {
    return num % 2 == 0;
}
var nums = [2, 4, 6, 8, 10];
console.log(nums);
var even = nums.every(isEven);
if (even) {
    console.log("all numbers are even");
}
else {
    console.log("not all numbers are even");
}
var nums = [2, 4, 6, 7, 8, 10];
console.log(nums);
var even = nums.every(isEven);
if (even) {
    console.log("all numbers are even");
}
else {
    console.log("not all numbers are even");
}

//some - method
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);
var someEven = nums.some(isEven);
if (someEven) {
    console.log("some numbers are even");
}
else {
    console.log("no numbers are even");
}
nums = [1, 3, 5, 7, 9];
console.log(nums);
someEven = nums.some(isEven);
if (someEven) {
    console.log("some numbers are even");
}
else {
    console.log("no numbers are even");
}


// reduce - method
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = nums.reduce(add);
console.log('nums', nums, 'sum:', sum);

// reduce - method on strings
function concat(accumulatedString, item) {
    return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
console.log(words, sentence);

// reduceRight - method on strings
function concat(accumulatedString, item) {
    return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduceRight(concat);
console.log(words, sentence);

//Iterators functions that return a new array
//map - method
function curve(grade) {
    return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(grades, newgrades); // 82, 70, 86, 97, 88

function first(word) {
    return word[0];
}
var words = ["for", "your", "information"];
var acronym = words.map(first);
console.log(acronym, acronym.join("")); // displays "fyi"

//filter - method
function isEven(num) {
    return num % 2 == 0;
}
function isOdd(num) {
    return num % 2 != 0;
}
var nums = [];
for (var i = 0; i < 20; ++i) {
    nums[i] = i + 1;
}
var evens = nums.filter(isEven);
console.log("Even numbers: ");
console.log(evens);
var odds = nums.filter(isOdd);
console.log("Odd numbers: ");
console.log(odds);

function passing(num) {
    return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i) {
    grades[i] = Math.floor(Math.random() * 101);

}
var passGrades = grades.filter(passing);
console.log("All grades:");
console.log(grades);
console.log("Passing grades: ");
console.log(passGrades);

function afterc(str) {
    if (str.indexOf("cie") > -1) {
        return true;
    }
    return false;
}
var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misspelled = words.filter(afterc);
console.log(words, misspelled); // displays recieve,percieve,concieve

//Two Dimensional & Multi Dimensional Arrays
//Creating Two Dimensional Arrays
var twod = [];
var rows = 5;
for (var i = 0; i < rows; ++i) {
    twod[i] = [];
}

Array.matrix = function (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

var nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]); // displays 0
var names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names[1][2]); // display "Joe"

var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
console.log(grades, grades[2][2]); // displays 89

//Processing Two Dimensional Arrays
var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("Student " + parseInt(row + 1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}

var grades = [[89, 77, 78], [76, 82, 81], [91, 94, 89]];
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
    for (var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
    }
    average = total / grades[col].length;
    console.log("Test " + parseInt(col + 1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}

//Jagged Arrays
var grades = [[89, 77], [76, 82, 81], [91, 94, 89, 99]];
var total = 0;
var average = 0.0;
for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total / grades[row].length;
    console.log("Student " + parseInt(row + 1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}

//Arrays of Objects
function Point(x, y) {
    this.x = x;
    this.y = y;
}
function displayPts(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i].x + ", " + arr[i].y);
    }
}
var p1 = new Point(1, 2);
var p2 = new Point(3, 5);
var p3 = new Point(2, 8);
var p4 = new Point(4, 4);
var points = [p1, p2, p3, p4];
for (var i = 0; i < points.length; ++i) {
    console.log("Point " + parseInt(i + 1) + ": " + points[i].x + ", " +
        points[i].y);
}
var p5 = new Point(12, -3);
points.push(p5);
console.log("After push: ");
displayPts(points);
points.shift();
console.log("After shift: ");
displayPts(points);

//Array in Objects
function weekTemps() {
    this.dataStore = [];
    this.add = function (temp) {
        this.dataStore.push(temp);
    };
    this.average = function () {
        var total = 0;
        for (var i = 0; i < this.dataStore.length; ++i) {
            total += this.dataStore[i];
        }
        return total / this.dataStore.length;
    };
}


var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average()); // displays 54.875

/* Create a grades object that stores a set of student grades in an object. 
Provide a function for adding a grade and a function for displaying the 
student’s grade average.*/

function Student() {
    this.grades = [];
    this.averageGrade = function () {
        let total = 0;
        for (let i = 0; i < this.grades.length; ++i) {
            total += this.grades[i];
        }
        return total / this.grades.length;
    };
    this.addGrade = function (grade) {
        this.grades.push(grade);
    };
    this.clearGrades = function () {
        this.grades = [];
    };
    this.viewGrades = function () {
        return this.grades;
    };
}

const JohnDoe = new Student();
JohnDoe.addGrade(45);
JohnDoe.addGrade(54);
JohnDoe.addGrade(56);
JohnDoe.addGrade(67);
JohnDoe.addGrade(78);
console.log(JohnDoe.viewGrades());
console.log(JohnDoe.averageGrade());

