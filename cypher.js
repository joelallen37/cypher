let originalString = "Hello, I've written a cypher. Can you decipher what I'm saying?";
let asciiArray = []; // creating an empty array which will store to ascii values of the original string 

function findAscii () {
    
    for (i = 0; i < originalString.length; i++) { // a for loop to iterate through each char in the original string 
    asciiArray.push(originalString.codePointAt(i)); // convert the char > ASCII decimal value, and add that to the empty array created in the beginning.
       
}
}

findAscii(); // call the function, or it won't happen 
//convertAscii();

for (i=0; i < asciiArray.length; i++) { // again, using for loop to iterate through each item in the array 
    
    // I used a spreadsheet to help me figure out the differences between each ascii value. (i have added a copty to this folder)
    // I found that to convert letters a - k || A - K, i simply had to +15. However, letters l - z || L - Z needed -11 to the ascii decimal value. 

    if (asciiArray[i] >= 097 && asciiArray[i]<=107 || asciiArray[i] >= 65 && asciiArray[i]<=77) { // so, if the ascii decimal value falls between the given values 
        asciiArray[i] = asciiArray[i] + 15;  
    }

    else if (asciiArray[i] >= 108 && asciiArray[i] <= 122 || asciiArray[i] >= 76 && asciiArray[i]<=90) { // if the ascii decimal is between these values 
        asciiArray[i] = asciiArray[i] - 11; 
    }
}
    
codedLetters = String.fromCharCode(...asciiArray); // Converts each item in the array into a string value, and stores them as one string.   
// source: https://sabe.io/blog/javascript-convert-ascii-codes-characters
console.log(`${codedLetters}

makes sense, right?`);
// now, display the cyphered code. 
