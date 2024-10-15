let height = undefined;
let result;
let checkHeight = (height) => {
  let result = height ?? "Height is not defined";
  return result;
};

result = checkHeight();

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
