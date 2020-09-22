// Code your solution here!

function printString(string){
   console.log(string[0]);
 
   if (string.length > 1) {
     let mySubString = string.substring(1, string.length);
     printString(mySubString);
   } else {
     return true;
   }
}

function reverseString(string){
   if (string.length > 1){
      return reverseString(string.substring(1)) + string[0]
   } else {
      return string
   }
}

function isPalindrome(string){
   if (string.length === 1){
      return true
   } else if (string[0] === string[string.length-1]){
      return isPalindrome(string.slice(1,string.length-1))
   } else {
      return false
   }
}

function addUpTo(array,index){
   if (index){
      return addUpTo(array, index - 1) + array[index]
   } else {
      return array[0]
   }
}

function maxOf(array){
   if (array.length > 1){
     return Math.max(array.shift(), maxOf(array))
   } else {
     return array[0]
   }
 }


function includesNumber(array, number){
   if (array.length === 0){
      return false
   } else if(array[0] !== number){
      array.shift()
      return includesNumber(array, number)
   } else {
      return true
   }
}