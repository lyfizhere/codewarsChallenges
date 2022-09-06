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