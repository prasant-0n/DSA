// Write a function to reverse an array in place. using js
const reverseArrayInPlace = (arr) => {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

var myArray = [1, 2, 3, 4, 5, 6, 7];
reverseArrayInPlace(myArray);
console.log(myArray);
