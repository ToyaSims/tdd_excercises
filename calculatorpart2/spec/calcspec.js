
describe("Add", function(){
  let calc = new Calculator();
it("should add two numbers and return 0", function(){
    let result = calc.addNum(0,0);
    expect(result).toBe(0);
})

 it("should add two negative numbers and return -2", function(){
    let result = calc.addNum(-1,-1);
    expect(result).toBe(-2);
})


  it("should add two numbers and return 9", function(){
    let result = calc.addNum(4,5);
    expect(result).toBe(9);
})


   it("should add two numbers and return 10", function(){
    let result = calc.addNum(1,2,3,4);
    expect(result).toBe(10);
})

});


describe("Multiply", function(){
  let calc = new Calculator();
  it("should multiply two numbers and return 2", function(){
      let result = calc.multiplyNum(1,2);
      expect(result).toBe(2);
  })

  it("should multiply numbers and return 24", function(){
      let result = calc.multiplyNum(1,2,3,4);
      expect(result).toBe(24);
  })
});


//last
describe("last returns the result of the last method", function(){
  let calc = new Calculator();
  it("should return 2", function(){
      calc.multiplyNum(1,2);
      let result = calc.last();
      expect(result).toBe(2);
  })

  it("should return 3", function(){
      calc.addNum(1,2);
      let result = calc.last();
      expect(result).toBe(3);
  })

  it("should return 7", function(){
      calc.addNum(1,2);
      let result = calc.addNum(calc.last(), 4);
      expect(result).toBe(7);
  })
});

//Memory Slots
describe("Allow the Calculator to remember more stuff", function(){
  let calc = new Calculator();
  it("should return 3", function(){
      calc.addNum(1,2);
      calc.set_slot(1);
      let result = calc.get_slot(1)
      expect(result).toBe(3);
  })

   it("should return 9", function(){
      calc.addNum(1,2);
      calc.set_slot(1);
      let result = calc.addNum(calc.get_slot(1), 6);
      expect(result).toBe(9);
  })

   it("should return 12", function(){
      calc.addNum(1,2);
      calc.set_slot(1);
      let result = calc.multiplyNum(calc.get_slot(1), 4);
      expect(result).toBe(12);
  })


});