const getAngkaTerbesarKedua = (arr) => {
  if (Array.isArray(arr) && arr.length >= 2) {
    let number = new Set(
      arr
        .sort((a, b) => {
          return a - b;
        })
        .reverse()
    );
    return Array.from(number)[1];
  } else return "Invalid";
};
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
