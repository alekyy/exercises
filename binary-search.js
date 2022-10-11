function binarySearch(arr, value) {
    if (arr.length === 0) {
        return false;
    }

    const middle = Math.round(arr.length / 2);

    if (arr[middle] === value) {
        return true;
    } else if (middle === 1 && arr[0] === value) {
        return true;
    } else if (middle === 1) {
        return false;
    }

    if (value < array[middle]) {
        return binarySearch(arr.slice(0, middle), value);
    } else if (value > array[middle]) {
        return binarySearch(arr.slice(middle), value);
    }
}

const array = [1, 2, 3, 5, 6, 7, 8, 10];
console.log(binarySearch(array, 11))