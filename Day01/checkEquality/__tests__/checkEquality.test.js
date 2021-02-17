// import { checkIfString } from "../index";

// describe("check equality", () => {
//   test("should return true if got string", () => {
//     expect(checkIfString("hamada")).toBeTruthy();
//     expect(checkIfString(1)).toBeFalsy();
//   });

//   //   test("", () => {});
// });

//check if number is even or no
import {checkIfEven} from "../index";
describe("check even " ,()=>{
      test("check if number is even or no",()=>{
        expect(checkIfEven(2)).toBeTruthy();
        expect(checkIfEven(3)).toBeFalsy();
      }
      );
});
