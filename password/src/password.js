function password_is_valid(password){
     
    var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{9,}$/;          
    var result = check.test(password); 
  
   try {
     if(result == false) throw('password must have atleast one uppercase letter, lowercase letter and number');
     
   } catch (err) {
     return 'Error ' + err;
  
   }
  
     finally {
        return result;
     }
  }

function password_is_ok(password) {
 
 let exp1 = /^[A-Za-z0-9]{9,}$/;
 let exp2 = /^(?=.*[A-Z])[A-Z]+/;
 let exp3 = /^(?=.*[a-z])[a-z]+/;
 let exp4 = /^(?=.*[0-9])[0-9]+/;

 if (exp1.test(password) === true && exp2.test(password) === true) {
   return 'password is valid';
 } else
 if (exp1.test(password) === true && exp3.test(password) === true) {
   return 'password is valid';
 } else
 if (exp1.test(password) === true && exp4.test(password) === true) {
   return 'password is valid'
 } else{
   return 'password is invalid'
 }
}
