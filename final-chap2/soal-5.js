const getSplitName = (personName) => {
  if (typeof personName === "string") {
    const arrayName = personName.split(" ");
    const jumlahKata = arrayName.length;
    if (jumlahKata >= 1 && jumlahKata <= 3) {
      if (jumlahKata == 1) {
        return {
          firstName: arrayName[0],
          middleName: null,
          lastName: null,
        };
      } else if (jumlahKata == 2) {
        return {
          firstName: arrayName[0],
          middleName: null,
          lastName: arrayName[1],
        };
      } else {
        return {
          firstName: arrayName[0],
          middleName: arrayName[1],
          lastName: arrayName[2],
        };
      }
    } else {
      return "Error: This function is only for 3 characters name";
    }
  } else {
    return "Error: Input must be string";
  }
};

console.log(getSplitName("Jajang Ali Nurdin"));
console.log(getSplitName("Jajang Ali"));
console.log(getSplitName("Jajang"));
console.log(getSplitName("Jajang Ali Nurdin Subagja"));
console.log(getSplitName(3));
