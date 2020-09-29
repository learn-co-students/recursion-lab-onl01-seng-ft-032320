function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }


  
    function reverseString(myString) {
        if (myString === "")
          return "";
        else
         return reverseString(myString.substr(1)) + myString.charAt(0);
      }
     
    
  console.log(reverseString('pizza'))
  
  function isPalindrome(string) {
    if (string.length <= 1) {
      return true;
    }
  
    let [ firstLetter ] = string;
    let lastLetter = string[string.length - 1];
  
    if (firstLetter === lastLetter) {
      let stringWithoutFirstAndLastLetters = string.substring(1, string.length - 1);
      return isPalindrome(stringWithoutFirstAndLastLetters);
    } else {
      return false;
    }
  }

  function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  }

  function maxOf(array){
    if(array.length === 1)
    return array[0]
    else
    return Math.max(array.pop(),maxOf(array))

  }

  function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1), myNumber);
    }
  }
      
      
    
  
