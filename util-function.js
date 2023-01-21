const numberWithComma = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const randomPick = (arr, count, isOverlap) => {
  const oldArr = [...arr];
  const newArr = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.ceil(Math.random() * oldArr.length - 1);
    newArr.push(oldArr[randomNumber]);
    isOverlap ? null : oldArr.splice(randomNumber, 1);
  }
  return newArr;
};
