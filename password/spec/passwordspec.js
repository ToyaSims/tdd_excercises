
describe('password_is_valid', function(){

        it("password should meet all requirements", () => {
            expect(() => { password_is_valid("qwer9P") }).toThrowError();
     });

     it('should check if password contains +8', function(){
        let result = password_is_valid('qew3rtyuioP');
        expect(result).toBe(true);
    })
it('should check if password is not null', function(){
        let result = password_is_valid('qew3rtyuioP');
        expect(result).toBe(true);
    })
    it('should check if password has atleast one uppercase', function(){
        let result = password_is_valid('qew3rtyuioP');
        expect(result).toBe(true);
    })
    it('should check if password has atleast one lowercase', function(){
        let result = password_is_valid('qew3rtyuioP');
        expect(result).toBe(true);
    })
    it('should check if password has atleast one number', function(){
        let result = password_is_valid('qew3rtyuioP');
        expect(result).toBe(true);
    })
 
})

describe('password_is_ok', function(){
    it('should check if password has +8 characters and is not null', function(){
        let result = password_is_valid('qew3rtyuioP');
        expect(result).toBe(true);
    })
    it('should check if password has +8 characters and has uppercase letters', function(){
        let result = password_is_valid('qew3rtyuioP');
        expect(result).toBe(true);
    })

it('should check if password has +8 characters and has lowercase letters', function(){
    let result = password_is_valid('qew3rtyuioP');
    expect(result).toBe(true);
})
})
it('should check if password has +8 characters and has numbers', function(){
    let result = password_is_valid('qew3rtyuioP');
    expect(result).toBe(true);
})
  
