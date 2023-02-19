const numberWithComma = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const reverseStr = (str) => {
  return str.split("").reverse().join("");
};

const isEmpty = (item) => {
  if (typeof item === "object") {
    return !Object.keys(item).length;
  } else {
    console.error("This is not Object");
    return null;
  }
};
