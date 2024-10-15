let height = undefined;
let result ;

function isDefined(height) {
  result = height ?? "Height is not defined";
  return result;
}
result = isDefined(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”