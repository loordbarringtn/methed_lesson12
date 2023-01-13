const random = Math.floor(Math.random() * 100) + 1;

function guessNumber(random) {
  let answer = parseInt(
    prompt(
      "Сгенерировано число в диапазоне от 1 до 100, пожалуйста введите Ваш вариант:"
    )
  );

  if (answer === random) {
    return alert(`Вы ввели правильный номер: ${random}`);
  }

  if (!answer) {
    return alert("Игра закончена!");
    guessNumber(random);
  }

  if (answer < random) {
    alert("Вы ввели число меньше загаданного");
    guessNumber(random);
  }

  if (answer > random) {
    alert("Вы ввели число больше загаданного");
    guessNumber(random);
  }

  if (Number.isNaN(answer)) {
    alert("Введите число");
    guessNumber(random);
  }
}

guessNumber(random);
