import {squareNumber,squareNumberStatement} from ".."
describe("Square_Root",()=>{
    test("squr number ",()=>{
      const input = 16;
      const output = 4;
      expect(squareNumber(input)).toBe(output);
    });
});
//bonus
describe("Square_Root_string",()=>{
    test("squr number with string ",()=>{
      const input = 16;
      const unit = "cm";
      const output = 4;
      const res =`the result should be ${output} ${unit}`;
      expect(squareNumberStatement(input,unit)).toMatch(res);
    });
});