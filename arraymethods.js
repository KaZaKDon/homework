//mySlice

function mySlice(arr, start = 0, end = arr.length) {
  const result = [];
  const validStart = start;
  const validEnd = end;

  for (let i = validStart; i < validEnd && i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(mySlice([1, 2, 3, 4, 5], 1, 3)); 
console.log(mySlice([1, 2, 3, 4, 5], -3, -1)); 


//myIndexOf

function myIndexOf(arr, item, from = 0) {
  const validFrom = from;

  for (let i = validFrom; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

console.log(myIndexOf([1, 2, 3, 4, 5], 3)); 
console.log(myIndexOf([1, 2, 3, 4, 5], 6)); 


//Метод myIncludes

function myIncludes(arr, item, from = 0) {
  const validFrom = from;

  for (let i = validFrom; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}
console.log(myIncludes([1, 2, 3, 4, 5], 3));
console.log(myIncludes([1, 2, 3, 4, 5], 6));