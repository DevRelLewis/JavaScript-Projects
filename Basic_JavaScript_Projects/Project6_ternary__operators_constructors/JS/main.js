function Ride_Function() {
    var Height, Car_Ride;
    Height = document.getElementById("Height").value
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford","Pinto", 1970, "Mustard");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Erik drives a " + Erik.Vehicle_Color + " manufactured in " + Erik.Vehicle_Model;
}