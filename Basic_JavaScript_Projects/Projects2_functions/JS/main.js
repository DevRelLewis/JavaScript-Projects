function My_Second_Function() {
    var str = "Yep, this is happening";
    var result = str.fontcolor("pink");
    document.getElementById("Pink_Text").innerHTML = result;
}

function myFunction() { //Defining function and namaing it
    var sentence = "I am learning"; //Defining a variable and naming it
    sentence += " a lot of this book!";//Concatenate the variable sentence with the second part of the sentence
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value of Concatenate into the HTML element with Sentence
}

