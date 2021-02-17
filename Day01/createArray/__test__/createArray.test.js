import createArray from "../index"
describe("Create_Array",()=>{
      test("should array contains array keys",()=>{
          const arrLen=5;
          //const output = Array.from(Array(arrLen).keys());
          const output = [0, 1, 2, 3, 4];
          expect(createArray(arrLen)).toEqual(output);
          //bonus
          expect(output).toHaveLength(arrLen);
      });
});