function myDictionary() { //Define function
    var Vehicle = { //Variable defined
        Year:"2022",//KVP
        Make:"Range Rover",//KVP
        Model:"SV Autobiography",//KVP
    };
    delete Vehicle.Make;//delete statment removing Vehicle.Make
    document.getElementById("Dictionary").innerHTML = Vehicle.Make;//method to modify the <p> element and return the element that has the ID attribute
}