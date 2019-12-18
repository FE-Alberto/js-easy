console.log(a, b); // undefiend undefiend

var a = 12,
    b = 12;

function fn() {
    console.log(a, b);  // undefiend 12
    var a = b = 13;
    console.log(a, b); // 13 13

}
fn();
console.log(a, b); // 12 13