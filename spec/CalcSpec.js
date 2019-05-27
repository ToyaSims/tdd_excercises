//test for additions functions
describe("add function", function () {

  it("should add 2 numbers,return 0", function () {
    let result;
    result = add(0, 0);
    expect(result).toBe(0);

  });
  
    it("should add 2 negetive numbers", function () {
    let result;
    result = add(-1, -1);
    expect(result).toBe(-2);

  });
    it("should add 2 numbers", function () {
    let result;
    result = add(4,5);
    expect(result).toBe(9);

  });

  it("should add all numbers entered", function () {
    let result;
    result = addAll(1, 2, 3, 4);
    expect(result).toBe(10);

  });
});

//test for multiplication functions
describe("multiply function", function () {

  it("should multiply 2 numbers", function () {
    let result;
    result = multiply(1, 2);
    expect(result).toBe(2);

  });

  it("should multiply all numbers entered", function () {
    let result;
    result = multiplyAll(1, 2, 3, 4);
    expect(result).toBe(24);

  });

});
