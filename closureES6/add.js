var add = (function () {
    var counter = 0;
    console.log(counter);
    return function () {return counter +=1; }
  
})();

add();
add();
add();
//console.log(counter);
console.log(add());
var x=add();
console.log(x);
