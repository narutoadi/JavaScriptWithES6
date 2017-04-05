var fruits = ['Apple', 'Banana'];
console.log(fruits.length);

var first = fruits[0];

//looping over the array
fruits.forEach(function(item1, index, array) {
    console.log(item1, index);
});

// insert at end
var nLen = fruits.push('Orange');
console.log(nLen);
console.log(fruits);

// remove from end
var last = fruits.pop();
console.log(last);
console.log(fruits);

// remove from front
var first = fruits.shift();

// insert at front
var nLen = fruits.unshift('Strawberry');
console.log(nLen);
console.log(fruits);

var pos = fruits.indexOf('Banana');
console.log(pos);

// removing item at index i
i=1
var item = fruits.splice(i,1);
console.log(item);
console.log(fruits);

var f = fruits;
var shallowCopy = fruits.slice();

console.log(f);
console.log(shallowCopy);


// declaring and defining an array
var a1= ['hi', 1, 2, "hup", ['next', 2]];
var a2= new Array('hi', 1, 2, "hup", ['next', 2] );
var a3= new Array(4)
console.log(a1);
console.log(a2);
console.log(a3);
