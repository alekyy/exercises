//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(array) {
  // input: array[num]
  // find the first recurring character
  // output: num( | undefined
  // Linear -> O(n)
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    if (!map.get(key)) {
      map.set(key, true);
    } else {
      return key;
    }
  }

  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 3, 4]));
