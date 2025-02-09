//Когда, функция видит и может использовать переменные, которые были доступны во время её создания.

function createLogger() {
  // Создаем массив для хранения сообщений
  const arreyMessage = [];

  return {
    // Метод для сохранения сообщения
    log(message) {
      arreyMessage.push(message);
    },
    // Метод для получения всех сохраненных сообщений
    getLogs() {
      return arreyMessage;
    },
  };
}

// Пример использования
const logger = createLogger();
logger.log("Первое сообщение");
logger.log("Второе сообщение");
console.log(logger.getLogs());

function createRandomGenerator(min, max) {
  return function () {
    setTimeout(() => {
      // Генерируем случайное число в диапазоне от min до max
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log(randomNumber); // Выводим случайное число
    }, 2000);
  };
}

// Пример использования
const randomGenerator = createRandomGenerator(1, 10);
randomGenerator();
