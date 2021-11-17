function addition() {
   var add = 5 + 10;
   document.getElementById("math").innerHTML = "5 + 10 = " + add;
}

function subtraction() {
    var x = 5
    var y = 2
    document.getElementById("math2").innerHTML = x - y;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("math3").innerHTML = simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("math4").innerHTML = simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("math5").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("math7").innerHTML = -x;
}

function maxFunction() {
    var result = Math.max(1,2,3);
    document.getElementById("math8").innerHTML = result;
}

document.getElementById("math9").innerHTML = Math.PI;


// var X = 5;
// X++;
// document.write(X);

// var Y = 5.25;
// Y--
// document.write(Y);

// window.alert(Math.random());
// window.alert(Math.random() * 100);

