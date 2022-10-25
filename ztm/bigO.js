const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
  "nemo",
];

const large = new Array(100000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log("running");
    if (array[i] === "nemo") {
      console.log("Found Nemo!");
      break;
    }
  }
}

// findNemo(everyone); // O(n) --> Linear Time

function logFirst(array) {
  console.log(array[0]);
}

// logFirst(large); // O(1) -> Constant Time

const boxes = [1, 2, 3, 4, 5];

function logPairOfBoxes(boxes) {
  for (let i = 0; i < boxes.length; i++) {
    for (let j = 0; j < boxes.length; j++) {
      console.log(boxes[i], boxes[j]);
    }
  }
}

logPairOfBoxes(boxes); // O(nˆ2)
