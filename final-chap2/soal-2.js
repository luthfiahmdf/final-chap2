// checkTypeNumber = (giveNumber) => {
//   if (giveNumber % 2 == 0) {
//     return "Genap";
//   } else if (giveNumber % 2 == !0) {
//     return "Ganjil";
//   } else if (typeof giveNumber !== "number") {
//     return "Invalid Data type";
//   } else {
//     giveNumber === undefined;
//     return "Gaada parameter";
//   }
// };
// console.log(checkTypeNumber());

// checkTypeNumbber = (givenNumber) => {
//   if (givenNumber % 2 == 0) {
//     return "Genap";
//   } else if (givenNumber % 2 == !0) {
//     return "Ganjil";
//   }
// };
// console.log(checkTypeNumbber(2));

// const checkTypeNumbber = (givenNumber) => {
//   if (typeof givenNumber !== "number") {
//     return "Error Invalid data type";
//   } else if (givenNumber === undefined) {
//     return "gaada parameternya cuy";
//   } else return givenNumber % 2 === 0 ? "Genap" : "Ganjil";
// };

// console.log(checkTypeNumbber());
// console;

const checkTypeNumber = (givenNumber) => {
  if (givenNumber === undefined) {
    return "Gaada parameter";
  } else if (typeof givenNumber !== "number") {
    return "invalid data type";
  } else return givenNumber % 2 === 0 ? "genap" : "ganjil";
};

console.log(checkTypeNumber(8));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("8"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
