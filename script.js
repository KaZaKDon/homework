// Функция, выбирающая случайное число от 1 до 100
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция, реализующая игру
function numberGuessingGame() {
  // Ввод минимального и максимального числа
    let min = 1;
    let max = 100;
    const secretNumber = getRandomNumber(min, max);
    let guess;
    let attempts = 0;

    console.log(`Первый компьютер загадал число между ${min} и ${max}.`);

    // Игра продолжается, пока число не будет угадано
    while (true) {
        attempts++;
        // Вычисляем текущее предположение (среднее значение диапазона)
        guess = Math.floor((min + max) / 2);
        console.log(`Попытка ${attempts}: Компьютер предполагает число ${guess}.`);

        if (guess === secretNumber) {
            console.log(`Компьютер угадал число ${secretNumber} за ${attempts} попыток!`);
            break; // Если угадал - выходим из цикла
        } else if (guess < secretNumber) {
            console.log("Подсказка: больше.");
            min = guess + 1; // Уточняем диапазон
        } else {
            console.log("Подсказка: меньше.");
            max = guess - 1; // Уточняем диапазон
        }

        // Проверяем, остается ли доступный диапазон
        if (min > max) {
            console.log("Не удалось угадать число. Ошибка в логике игры.");
            break;
        }
    }
}

// Запускаем игру
numberGuessingGame();