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



