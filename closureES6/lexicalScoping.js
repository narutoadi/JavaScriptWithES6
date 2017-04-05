function init() {
    var name = 'Mozilla'; // local variable
    function displayName() { // inner function / closure
    console.log(name);
    }
    displayName();
}
init();
        
