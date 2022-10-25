// O(nˆ2), quadratic solution, not a very good one since it would be more time complex
function hasPairOfSum(array, sum) {
  let foundSum = false;
  for (const element of array) {
    for (const secondElement of array) {
      if (element + secondElement === sum) {
        foundSum = true;
        break;
      }
    }
    if (foundSum) break;
  }

  return foundSum;
}

// Linear O(n)
function hasPairOfSumRecursive(array, sum, minRange, maxRange) {
  if (minRange === maxRange) {
    return false;
  }

  const rangeSum = array[minRange] + array[maxRange];
  if (rangeSum === sum) {
    return true;
  } else if (rangeSum > sum) {
    return hasPairOfSumRecursive(array, sum, minRange, maxRange - 1);
  } else if (rangeSum < sum) {
    return hasPairOfSumRecursive(array, sum, minRange + 1, maxRange);
  }
}

// Linear O(n)
function hasPairOfSumWhile(array, sum) {
  let minRange = 0;
  let maxRange = array.length - 1;

  while (minRange != maxRange) {
    const rangeSum = array[minRange] + array[maxRange];

    if (rangeSum === sum) {
      return true;
    } else if (rangeSum > sum) {
      maxRange--;
    } else if (rangeSum < sum) {
      minRange++;
    }
  }

  return false;
}

const array = [1, 2, 3, 9];
console.log(hasPairOfSumWhile(array, 8));
