function myFilter(array, callback) {
    if (!Array.isArray(array)) {
        return "это не массив"
    }

    const filetredArray = [];

    for (let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {

        const resultCallback = callback(array[arrayIndex], arrayIndex, array);

        if (resultCallback) {
            filetredArray.push(array[arrayIndex]);
        }

    }

    return filetredArray;
}

const arrayData = [2, 5, 1, 25, 14, 6]

console.log(myFilter(arrayData, (num, index) => index > 3));