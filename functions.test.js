const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions');

test("returnTwo() should return the number 2", () => {
    expect(returnTwo()).toEqual(2);
})

test("greeting() should return a greeting based on the name entered as a parameter.", () => {
    expect(greeting('James')).toEqual("Hello, James.");
    expect(greeting('Jill')).toEqual("Hello, Jill.");
})

//Describe allows us to group similar tests into a single suite
describe("Math functions", () => {
    test("add() should add num1 and num2.", () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(5, 9)).toEqual(14);
    });
    test("multiply() should return a dynamic product based on two number parameters.", () => {
      expect(multiply(1, 2)).toEqual(2);
      expect(multiply(5, 9)).toEqual(45);
    });

    test("divide() should return a dynamic quotient based on two number parameters.", () => {
      expect(divide(2, 1)).toEqual(2);
      expect(divide(9, 3)).toEqual(3);
    });

    test("subtract() should return a dynamic difference based on two number parameters.", () => {
        expect(subtract(2, 1)).toEqual(1);
        expect(subtract(9, 3)).toEqual(6);
    });

})






