// Code your solution here!

function printString(string) {
    console.log(string[0]);

    if (string.length > 1) {
        let substring = string.substring(1, string.length);
        printString(substring);
    } else {
        return string;
    }
  }

  function reverseString(string) {
    if (string === "")
        return "";
    else
        return reverseString(string.substring(1)) + string.charAt(0);
}

function isPalindrome(string) {
    if (string.length <= 1)
        return true;
    else if (string[0] === string[string.length - 1])
        return isPalindrome(string.slice(1, string.length - 1));
    else
        return false;
}

function addUpTo(arr, i) {
    if (arr.length === 0)
        return 0;
    else 
        return arr[i] + addUpTo(arr, --i)
}

function maxOf(myString) {

}

function includesNumber(myString) {

}