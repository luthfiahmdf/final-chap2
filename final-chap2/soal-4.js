// const checkPass = (password) => {
//   let check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
//   if (typeof password == "number") {
//     return "Bukan string";
//   } else if (password == undefined) {
//     return "Parameter kosong";
//   } else if (typeof password.match(check) == "string") {
//     if (password.match(check) == undefined) {
//       return "Invalid";
//     } else if (password.match(cek)) {
//       return "Valid";
//     } else return "invalid";
//   } else "invalid";

//   console.log(checkPass("Meong2021"));
//   console.log(checkPass("meong2021"));
//   console.log(checkPass("Meong2021"));
//   console.log(checkPass("@eong"));
//   console.log(checkPass("Meong2"));
//   console.log(checkPass(0));
//   console.log(checkPass());

//   // if (password.match(regex)) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// };

// console.log(checkPass("Meong2021"));
// console.log(checkPass("meong2021"));

// const checkPass = (password) => {
//   let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

//   if (typeof password == "number") {
//     return "Error karena bukan string";
//   } else if (password == null) {
//     return "Error karena gaada parameter";
//   } else if (typeof password.match(regex) == "string") {
//     if (password.match(regex) == password) {
//       return false;
//     } else if (password.match(regex)) {
//       return true;
//     } else {
//       return false;
//     }
//   } else;
// };
const isValidPassword = (password) => {
  let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (typeof password == "string") {
    if (password.match(passRegex)) {
      return true;
    } else {
      return false;
    }
  } else if (typeof password == "undefined") {
    return "Your Password still emptty";
  } else {
    return "Your password doesn't match what was requested";
  }
};

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword([]));
console.log(isValidPassword({}));
console.log(isValidPassword(9));
console.log(isValidPassword());
