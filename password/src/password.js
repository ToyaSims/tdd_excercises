
function password_is_valid(password){

  var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/;
  var tester = check.test(password);
if(tester == true )
  {
      return true
  }
else
  {
      throw new Error
  }


}


function password_is_ok(password) {

let length1 = /^[A-Za-z0-9]{9,}$/;
let upper = /^(?=.*[A-Z])[A-Z]+/;
let low = /^(?=.*[a-z])[a-z]+/;
let digit = /^(?=.*[0-9])[0-9]+/;

if(length1 == false && password === ""){
 return "password is never OK"
}

if (length1.test(password) === true && upper.test(password) === true) {
 return 'password is valid';
} else
if (length1.test(password) === true && low.test(password) === true) {
 return 'password is valid';
} else
if (length1.test(password) === true && digit.test(password) === true) {
 return 'password is valid'
}
else{
 return 'password is invalid'
}
}
