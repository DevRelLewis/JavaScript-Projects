document.write("Super" + "monkey");
document.write(10 > 2);
document.write(10 < 2);
document.write(10 == 10);
document.write(3 == 11);

document.write(4 > 2 && 8 > 6);
document.write(5 > 7 && 7 > 5);
document.write(3 > 5 || 7 > 6);
document.write(3 > 4 || 6 > 7);


X = 10;
Y = 10;
console.log(X === Y);

X = 2;
Y = "2";
console.log(X === Y);

console.log(2 * 2);
console.log(1 > 2);
console.log(10 == 12);

function another_Function() {
    document.getElementById("Test").innerHTML = (-3E310);
}

function yet_another_Function() {
    document.getElementById("Test2").innerHTML = (3E310);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 4);
}

function not_Function_2() {
    document.getElementById("Not2").innerHTML = !(5 > 7);
}

function Ride_Function() {
    var Height, Car_Ride;
    Height = document.getElementById("Height").value
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}