//1.
function maxOfTwoNumbers(a, b) {
  console.log(a > b ? a : b);
  return a > b ? a : b;
}

maxOfTwoNumbers(8, 5);
console.log("---End of 1---");
//2.
let maxOfThree = (...args) => {
  let maxNum = -Infinity;
  for(let i = 0; i < args.length; i++) {
    args[i] > maxNum ? maxNum = args[i] : maxNum; 
  }
  console.log(maxNum);
  return maxNum;
}

maxOfThree(1 ,4 , 3, 99, 1, 1099);
console.log("---End of 2---");
//3.
function isCharAVowel(param) {
  switch(param) {
    case "a":
    case "o":
    case "i":
    case "e":
    case "u":
      console.log(param + " is a vowel");
      return true;
      break;
    default:
      console.log(param + "  is not a vowel");
      return false;
  }
}

isCharAVowel("a");
isCharAVowel("b");
console.log("---End of 3---");

//4.
let sumArray = (arr) => {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  console.log(total);
  return total;
}

sumArray([2, 6, 9]);
console.log("---End of 4---");

//5.
function multiplyArray(arr) {
  let total = 1;
  for(let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  console.log(total);
  return total;
}

multiplyArray([2, 6, 9]);
console.log("---End of 5---");

//6.
let numArgs = (...args) => {
  console.log(args.length);
  return args.length;
}

numArgs(1, 2, 3, 4, 5, 99, {lola: "lola"});
console.log("---End of 6---");

//7.
function reverseString(str) {
  console.log(str.split("").reverse().join(""))
  return str.split("").reverse().join("");
}

reverseString("hello");
console.log("---End of 7---");

//8.
let longestStringInArray = (arr) => {
  let longest = 0;
  let longestName = "";
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > longest) { longest = arr[i].length; longestName = arr[i] } else {longest; longestName;
  }

};
    console.log(longest, longestName);
    return (longest, longestName);
};

  longestStringInArray(["hello", "nii", "ranchocookamonga"]);
  console.log("---End of 8---");

//9.
function stringsLongerThan(arr, num) {
  let longerThan = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > num) {longerThan.push(arr[i])};
  }
  console.log(longerThan);
  return longerThan;
}

stringsLongerThan(["one", "hundred", "thousand", "fifillion"], 7);
console.log("---End of 8---");