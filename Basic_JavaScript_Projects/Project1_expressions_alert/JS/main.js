var A="Hello World, ";
var B="I am actually doing this!";
document.write(A,B);
document.write("\"how can you think that?!\"");

document.write("\"Be who you are and say what you feel,"+ "because those who mind don\'t matter and those who matter don\'t mind.\" " + "-Dr. Seuss"); 

var X = "Kids" + " so much energy"
document.write(X)

var Family = "The Arezzinis", Dad = "Jeremiah" , Mom = "Hermoine" , Daughter = "Penny" , Son = "Zorro";
document.write(Family)
document.write(Dad)

var blues = "I have the blues.";
var blues = blues.fontcolor("blue");
document.write(blues);

document.write(3+3);


//This is where the button is for the HTML
function My_First_Function() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a 
                                    //string value
    var result = str.fontcolor("green");//Using the fontcolor method on
                                        //str variable
    document.getElementById("Green_Text").innerHTML = result;//Putting the value
                                                            //of result into HTML element with "Green_Text" id
}
//End button