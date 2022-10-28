function mergeSortedArrays(array1, array2) {
  const newArray = array1.concat(array2);
  return newArray
    .sort((a, b) => a - b)
    .filter((element, index) => newArray.indexOf(element) === index);
}

function mergeSortedArrays2(array1, array2) {
  const newArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];

  let index1 = 1;
  let index2 = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      newArray.push(array1Item);
      array1Item = array1[index1];
      index1++;
    } else if (array1Item === undefined || array2Item < array1Item) {
      newArray.push(array2Item);
      array2Item = array2[index2];
      index2++;
    } else if (array1Item === array2Item) {
      array2Item = array2[index2];
      index2++;
    }
  }

  return newArray;
}

const array1 = [0, 3, 4, 31];
const array2 = [4, 6, 30];

console.log(mergeSortedArrays2(array1, array2));
