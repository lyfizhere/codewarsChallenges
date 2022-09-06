//01. Convert a Number to a String!!

//My Solution - 
function numberToString(num) {
    let str = num.toString();
    return str;
}
numberToString(123);
console.log(numberToString(123));

//Other best practices solutions- 
function numberToString(num) {
    return num.toString();
  }

  function numberToString(num) {
    // Return a string of the number here!
    return String(num);
  }