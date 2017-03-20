var link = function (height, color, url) {
    var height = height || 50
    var color = color || 'red'
    var url = url || 'http://aditi.me'
    var x=5
    x=x+height;
    console.log(x);
    console.log(height);
    console.log(url);
    console.log(color);
}
link(23);
link(0);
console.log(link.height);
console.log(link.url);
console.log(link.color);

