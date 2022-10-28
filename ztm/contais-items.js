function containsCommonItem(array1, array2) {
  let map = {};

  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];
    if (!map[item]) {
      map[item] = true;
    }
  }

  for (let i = 0; i < array2.length; i++) {
    const item = array2[i];
    if (map[item]) {
      return true;
    }
  }

  return false;
}

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "w", "x"];
console.log(containsCommonItem(array1, array2));
