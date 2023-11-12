var outputString = []; 
var upperCase = [];
var lowerCase = [];
var inputString = "";

//waits for the submit button to be clicked
//prevent default prevent the page reloading and deleting the string

formID.addEventListener('submit', e => {
      e.preventDefault();     
      //text.innerHTML = 'clicked';
      
    });   

// gets the string from the sentance input box
function stringFunc(inputString) {
  
  inputString = document.getElementById("sentance").value;
  
  //checks to see if anything has been entered. 
  if (inputString == "") {
    console.log("You crazy fool! You entered no text! please enter some text."); 
    /* document.getElementById("outputText").innerHTML = emptyString.toString(); */
    alert("You crazy fool! You entered no text! please enter some text");
    }

    // Reset arrays before each function call
    outputString = [];
    upperCase = [];
    lowerCase = [];

  //checks which tick boxes have been selected and runs the relevant function.
  //{inputString = func(inputString)}, this part of the code is needed to update the inputString variable in the 'stringFunc' function.
  //without this the inputString in the 'stringFunc' will not update and each consecutive function will use the original inputString. 
  if (e2.checked) {inputString = eToEuro(inputString) }
  if (uToU.checked) {inputString = uToUmlaut(inputString) }
  if (oToO.checked) {inputString = oToOstrikeThrough(inputString)}
  if (s.checked) {inputString = sToDollar(inputString)}
  if (i.checked) {inputString = iToExclamation(inputString)}
  if (caps.checked) {inputString = toUpperCase(inputString)}
  
  // if (e.checked && !e2.checked) {eToThree(inputString)}
  
  printString(inputString);
  //return inputString;
  }


//goes thought the string and makes every other letter CAPITAL
//it pushes these CAP and lower case letters to two arrays lowerCase and UpperCase
function toUpperCase (inputString) {
  
  //clears the output box
  document.getElementById("outputText").value = "";

  let caps = document.getElementById("caps"); 
  

      document.getElementById("outputText").value = ""      
  for (i = 0; i < inputString.length; i++) {
    if (i % 2 == 0) {
    upperCase.push (inputString[i].toUpperCase());  
    } else { 
    lowerCase.push(inputString[i]);     
    }
  }

  //takes the Uppercase and lowerCase arrays and pushes them in sequence to an array 'outputString'
for (index = 0; index < upperCase.length; index++) {
  outputString.push(upperCase[index]); 
  outputString.push(lowerCase[index]);
}
//takes the outputString and uses the .join method to combine them into a single sentance
var inputString = outputString.join(' '); 
console.log("here is the final string: " + inputString); 

return inputString;  
}

function eToEuro (inputString) {
  
  inputString = inputString.replaceAll("e", "€")
  console.log(inputString);
  return inputString;  
}

function uToUmlaut (inputString) {
  inputString = inputString.replaceAll("u", "ü")
  console.log(inputString);
  return inputString;  
}

function oToOstrikeThrough (inputString) {
  inputString = inputString.replaceAll("o", "ø")
  console.log(inputString);
  return inputString;  
}

function sToDollar (inputString) { 
	inputString = inputString.replaceAll("s", "$")
  console.log(inputString);
  return inputString;
} 

function iToExclamation (inputString) {
  inputString = inputString.replaceAll("i", "!")
  console.log(inputString);
  return inputString;
}

function eToThree (inputString) {
  inputString = inputString.replaceAll("e", "3")
  console.log(inputString);
  return inputString;
}


function printString (inputString) {
    //assigns the "outputText" section of the HTML the value of the final string. 
    document.getElementById("outputText").value = inputString;
    console.log(inputString); 	
}


//NOTES:

//need to check if boxes are ticked. 

//if (box.checked) { run function, retun a value}




//	https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/