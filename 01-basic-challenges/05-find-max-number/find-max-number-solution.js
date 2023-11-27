// write a function called findMaxArray hat takes an array of numbers and returns the largest
//  number in the array 

// 1 solution

// Solution 1 - Simplest solution
function findMaxNumber(arr) {
    // Math.max() can take any number of arguments, so we can use the spread operator
    return Math.max(...arr);
  }
  

// 2 solution
function findMaxNumber(arr){
    let max = arr[0];

    for (let i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}


