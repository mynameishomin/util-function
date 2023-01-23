const numberWithComma = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const randomPick = (arr, count, isOverlap) => {
  const oldArr = [...arr];
  const newArr = [];
  for (let i = 0; i < count; i++) {
    if (!arr.length) break;
    const randomNumber = Math.ceil(Math.random() * oldArr.length - 1);
    newArr.push(oldArr[randomNumber]);
    isOverlap ? null : oldArr.splice(randomNumber, 1);
  }
  return newArr;
};

const getToday = (format) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return `${year}-${month < 10 ? "0" + month : month}-${
    date < 10 ? "0" + date : date
  }`;
};
