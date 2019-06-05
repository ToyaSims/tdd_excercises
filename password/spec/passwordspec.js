describe('password_is_valid', function(){
  it('should check if password contains only lowercase', function(){
      let result = password_is_valid('HELLO');
      expect(result).toBe(false);
  })
  it('should check if password contains uppercase', function(){
      let result= password_is_valid('hello');
      expect(result).toBe(false);
  })
  it('should check if password contains numbers', function(){
      let result = password_is_valid('Hello012');
      expect(result).toBe(true);
  })
  it('should check if password longer than 8 numbers ', function(){
      let result= password_is_valid('Hello012');
      expect(result).toBe(true);
  })
  it('should check if password contains lowercase, uppercase, numbers and is longer than 8 letters', function(){
      let result= password_is_valid('Hello1012');
      expect(result).toBe(true);
  })
})

describe('password_is_ok', function(){
  it('should check if password is greater than eight characters, password entered has at least one lowercase ', function(){
      let result = password_is_ok('HELLOOOOO');
      expect(result).toBe('password is valid');
  })
  it('should check if password is greater than eight characters, password entered has at least one uppercase', function(){
      let result= password_is_ok('helloooooo');
      expect(result).toBe('password is valid');
  })
  it('should check if password is greater than eight characters, password entered has one number', function(){
      let result = password_is_ok('Hello0121');
      expect(result).toBe('password is valid');
  })
  it('should check if password is greater than eight characters', function(){
      let result= password_is_ok('Hello0128');
      expect(result).toBe('password is valid');
  })
  it('should check if password is greater than eight characters and contains at least one upper and lower case letter and a number', function(){
      let result = password_is_ok('Hello1012');
      expect(result).toBe('password is valid');
  })
})