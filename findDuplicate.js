//this function takes an arr of size n-1 which contains any numbers between 1 and n, and outputs the duplicate
function findDuplicate (arr, start, end) {
  //procedure: split in half, then:
    //find value at middle position
    //expected value is the average b/w first and last
      //if
      //if this value is larger than what's expected, then check the RHS
      //otherwise, both left and right have duplicates, so check the LHS
  //recurse
  //e.g. for [1,1,2], since 1 is smaller than (2+1)/2 = 1.5, then 
  if ((end - start) <= 2) {
    if (arr[start] !== arr[end]) {
      console.log("Something went wrong!");
    } else {
      return arr[start]; 
    }
  }
  if (!start) start = 0;
  if (!end) end = arr.length - 1;

  function findAverage (a,b) {return (a + b) / 2}
  var median;
  var averageValue = findAverage(arr[start],arr[end]);
  var averageIndex = Math.floor(findAverage(start, end));
  
  median = (end - start + 1) % 2 ?
    arr[averageIndex]
    : findAverage(arr[averageIndex],arr[averageIndex + 1]);

  //first let's check the special case where, if the median is split between two numbers, those numbers are equal
  if ((end - start) % 2) {
    if (arr[averageIndex] === arr[averageIndex + 1]) return arr[averageIndex];
  }

  if (median < averageValue) {
    return findDuplicate(arr, start, averageIndex);
  } else {
    return findDuplicate(arr, averageIndex, end);
  }
}

