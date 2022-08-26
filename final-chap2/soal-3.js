let checkValidateEmail = (email) => {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (typeof email == "number") {
    return "invalid karena bukan string";
  } else if (email == null) {
    return "Invalid karena tidak ada parameter";
  } else if (typeof email == "string") {
    if (email.match(regex) == null) {
      return "Invalid karena tidak sesuai regex";
    } else if (email.match(regex)) {
      return "Valid";
    } else {
      return "Invalid";
    }
  } else return "Invalid";
};

console.log(checkValidateEmail("cek@gmail.com"));
console.log(checkValidateEmail("cek@yahoo.id"));
console.log(checkValidateEmail("cek@gmail.co.id"));
console.log(checkValidateEmail("cek@gmail"));
console.log(checkValidateEmail("cek"));
console.log(checkValidateEmail(1818));
console.log(checkValidateEmail());

// const checkEmail = (email) => {
//   let hasil;
//   let regexCheck = /(\w+)@/;
//     let regex = /(w+)@[a-z]+(\.[a-z]+?)\.[a-z]{2,3}(\.[a-z]{2}?)/;

//     if (typeof email == "number") {
//         hasil = `ERROR`
//     } else if(typeof null) {

//     }

// };
