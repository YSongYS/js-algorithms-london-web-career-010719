/// 1. Fibonacci
//// RECURSIVE
function fibonacciEvenNumberWithLimi (limit){
  let acc = 0;

  // SET STARTPOINT OF RECURSION ITERATION
  const maxDigits = limit.toString().length
  const startpoint = Math.round((maxDigits+ Math.log10(5)/2)/(Math.log10(1.618)))

  let fibArray = fibonacci(startpoint);

  function fibonacci(itr){
    if (itr < 2) {
      return [1]
    }
    if (itr <3 ) {
      return [1, 1]
    }
    let lastVal = fibonacci(itr-1);
    lastVal.push(lastVal[itr-2]+lastVal[itr-3])
    return lastVal
  }

  fibArray = fibArray.filter((el)=>el<=limit)

  for (const num of fibArray) {
    if (num % 2 === 0) {
      acc += num
    }
  }
  return acc;
}


///NON-RECURSIVE
function simpleFib(limit){
  let fibSequence = [0,1,2]
  let index = 2;
  let acc = 0;

  while (fibSequence[index] <= limit) {
    index ++;
    newVal = fibSequence[index-1] + fibSequence[index-2]
    fibSequence.push(newVal)
  }
  fibSequence.pop()

  for (const num of fibSequence){
    if (num % 2 === 0) {
      acc += num
    }
  }

  return acc;
}


/// ### Two Sum

function twoSum(array, target){
  let indexA = 0
  let indexB = 0

  array.forEach(findTarget)

  function findTarget(num,index,arr){
    const remainingArray = arr.slice(index+1)

    remainingArray.forEach((remaingNum, remainigIndex, remainingArr)=>{
      if (remaingNum + num === target) {
        indexA = index
        indexB = remainigIndex+index+1
      }
    })

  }

  if (indexA===indexB) {
    return 'no match'
  }
  else {
    return [indexA, indexB]
  }
}


////### Collatz Sequence

function findLongestSequence(limit){
  let longestLength = 0
  let longestNum = 0

  for (let i=1; i<=limit; i++) {
    currentLength = sollatzSequence(i)
    if (currentLength > longestLength) {
      longestLength = currentLength
      longestNum = i
    }
  }
  function sollatzSequence(num){
    const sollatzSequence = [num]

    while (num !== 1){
      if (num % 2 === 0) {
        num = num/2
      }
      else {
        num = num*3+1
      }
      sollatzSequence.push(num)
    }

    return sollatzSequence.length
  }

  return [longestNum,longestLength]
}


//// merge sort
// merge function takes two sorted array and return one combined sorted array
function merge (arr1,arr2){
  let i = 0, j=0, marker=0

  //first loop takes each element of the array1 and insert them into appropriate position of array 2
  while (i<arr1.length){
    //if the element is already larger than the last (largest) element of array 2, instead of insert, put it at the end of array 2
    if (arr1[i] > arr2[arr2.length-1]){
      arr2.splice(arr2.length,0,arr1[i])
    }
    else {
      //Since array 2 is sorted, no need to iterate throught the full array again. Start at the position of where last element of array 1 was inserted.
      j = marker
      //second loop iterate through array2 to find the appropriate position to insert array 1 element
      while (j<arr2.length){
        if (arr2[j]>arr1[i]){
          //insert the array 1 element into array 2
          arr2.splice(j,0,arr1[i])
          //mark the start position of next iteration
          marker = j+1
          //exit the loop
          j = arr2.length
        }
        j++
      }
    }
    i++
  }
  return arr2;
}

function divideArray (arr){
  if (arr.length % 2 === 0){
    return [arr.slice(0,arr.length/2), arr.slice(arr.length/2)]
  }
  else {
    return [arr.slice(0,Math.round(arr.length/2)-1), arr.slice(Math.round(arr.length/2)-1)]
  }
}

function mergeSort (arr){
  if (arr.length>1) {
    //divide array first and then loop them into the next sort
    let arrLeft = mergeSort(divideArray(arr)[0])
    let arrRight = mergeSort(divideArray(arr)[1])
    //return result of merge
    return merge(arrLeft,arrRight)
  }
  // at the bottom of the one element array
  else {
    return arr
  }
}

//testing
console.log(mergeSort([1,9,2,4,6,8,7]))
