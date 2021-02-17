import capitalizeText from "../index"
describe("Capitalization",()=>{
    test("Should be First character is Capital",()=>{
          const input="asmaa";
          const output="Asmaa";
          
          expect(capitalizeText(input)).toMatch(output);
          
    });
    test("Should be string",()=>{
         const input1=2;
          const output1="";
        expect(capitalizeText(input1)).toMatch(output1);
        
  });
});