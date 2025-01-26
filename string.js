//Замена первого символа строки на заглавный

function appFirst(str) {
    if (typeof str !== "string") {
        return "Это не строка";
    }
  
    return str[0].toUpperCase() + str.slice(1);
  }

  console.log(appFirst('ппппппппппп'));

  
// Обрезка длины строки  

  function stringLongerAllowed(string, numberOfCharacters) {
    if (typeof string !== "string") {
        return "Это не строка";
    }

    if (string.length <= numberOfCharacters) {
        return string;
    }

    const endStr = "...";
    const indexOfLastLetter = indexOfLastСharacter(string, numberOfCharacters);

    return string.slice(0, string[indexOfLastLetter] !== " " ? indexOfLastLetter + 1 : indexOfLastLetter) + endStr;
}

function indexOfLastСharacter(string, numberOfLetters) {
    const separators = [" ", ",", ".", "!", "?", ":", ";"];

    let indexOfLastLetter = numberOfLetters - 1;

    while(!separators.includes(string[indexOfLastLetter]) && indexOfLastLetter > 0) {
        indexOfLastLetter--;
    }

    return indexOfLastLetter;
}

console.log(stringLongerAllowed("Строка с более 40 символов и двоеточием 'завершение строки'.", 40));

// проверка подстроки


function checkingSubstring(firstString, secondString) {

  if (typeof firstString !== "string") {
        return "Это не строка";
    }
    if (typeof secondString !== "string") {
        return "Это не строка";
    }
    if (firstString.length >= secondString.length) {
        return firstString.includes(secondString);
    } else {
        return secondString.includes(firstString);
    }
}

console.log(checkingSubstring('ffffff', 'sssssssssffffff'))