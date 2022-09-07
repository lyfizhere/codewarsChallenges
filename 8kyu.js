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

//02. Convert boolean values to strings 'Yes' or 'No'
//My Solution -
function boolToWord( bool ) {
    if (bool) {
      return "Yes";
    } else if(!bool) {
      return "No";
    }
  }
  console.log(boolToWord(0));

 //Other best practices solutions- 
 function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }
  // OR 
  let boolToWord = bool => bool ? 'Yes' : 'No';

// 03. DNA TO RNA Conversion - Create a function which translates a given DNA string into RNA.
//For example: "GCAT" => "GCAU"

//My Soultion - 
let dna = "GCAT"
function dnaToRna () {
    let rna = dna.replaceAll("T","U")
    return rna;
}
console.log(dnaToRna(dna));

 //Other best practices solutions-

function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }

// 04. Abbreviate a Two Word Name -> The output should be two capital letters with a dot separating them.
//My solution - 

let nam = "shree ram"
function abbrevName(nam) {
    let namSplit = nam.split(' ')
    console.log(namSplit);
    let firstInitial = namSplit[0].substring(0,1).toUpperCase()

    let lastName = namSplit[1]
    let lastInitial = namSplit[1].substring(0,1).toUpperCase()
    console.log(firstInitial)
    console.log(lastInitial)

    return `${firstInitial}.${lastInitial}`
}
console.log(abbrevName(nam))

 //Other best practices solutions-
 function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

  //OR 
  function abbrevName(name){
    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

// 05. Given an array of integers, return a new array with each value doubled.
// My Solution - 
let arr = [2, 4, 5]
let arr2 = [];
function doubleTheArr(arr){
  for (i=0; i<arr.length; i++) {
    arr2[i] = 2*arr[i]
  }
  return arr2;
}
console.log(doubleTheArr(arr))

//Other best practices solutions-
function maps(x){
  return x.map(n => n * 2);
}

//OR
maps = x => x.map(e => e * 2);

//06. Complete the square sum function so that it squares each number passed into it and then sums the results together.
//My Solution - 
let arr1 = [1,2,8]
function squareThenSum (arr1) {
    let sum =0;
    for(i=0; i<arr1.length; i++) {
        let squaredArr = []
        squaredArr[i] = arr1[i]**2
        sum = sum + squaredArr[i]
    }
    return sum;
}
console.log(squareThenSum(arr1))

//Other best practices solutions-
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}