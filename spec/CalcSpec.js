//test for additions functions
describe("add function", function () {

  it("should add 2 numbers", function () {
    let result;
    result = add(1, 2);
    expect(result).toBe(3);

  });

  it("should add all numbers entered", function () {
    let result;
    result = addAll(1, 2, 3);
    expect(result).toBe(6);

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
    result = multiplyAll(1, 2, 3);
    expect(result).toBe(6);

  });

});