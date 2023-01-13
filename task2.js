const arrayRecur = (array) => {
  const arraySum = array.reduce((acc, num) => acc + num, 0);
  console.log(`Сумма массива: ${arraySum}`);

  if (arraySum < 50) {
    array.push(Math.floor(Math.random() * 10));
    console.log(`Состав массива: ${array}`);
    arrayRecur(array);
  }
  return;
};

arrayRecur([3, 5, 8]);
