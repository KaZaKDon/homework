function sumNumericFields(obj) {
   if (typeof obj !== "object") {
        return "это не объект";
   }
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }

    return sum;
}

// Пример использования
const exampleObject = {
    a: 1,
    b: 2,
    c: 'text',
    d: 3,
    e: null,
    f: 4.5
};

const result = sumNumericFields(exampleObject);
console.log(result);


const specifiedObject = {name: 'Vasya', friends: 5, likes: 19, projects: 7}

function fieldNames(obj) {

  const arrayOfValues = []

  for (let key in obj) {
        if (typeof obj[key] === 'number') {
            arrayOfValues.push(obj[key])
        }
    }
    return arrayOfValues.sort(valuesCompare).reduce((resultArr, currentElem) => [ ...resultArr, getKeyValue(obj, currentElem) ], []);

    function valuesCompare(a, b) {
    if (a < b) return 1;
    if (a == b) return 0;
    if (a > b) return -1;
    };

    function getKeyValue(obj, value) {
    for (let key in obj) {
        if (obj[key] === value) {
            return key;
        }
    }
    }

}

const arr = fieldNames(specifiedObject)
console.log(arr);