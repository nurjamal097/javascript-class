
// Solution One
function calculatore(num1, num2, oparator) {
  let result;

  switch (oparator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      return 'invalid number'
  }
  return result
}

calculatore(10, 25, "+");

console.log(calculatore(10, 25, "+"));


// Solution Two
function calculatoreTwo(num1, num2, oparatore){
  let result;

if (oparatore === '+'){
  result = num1 + num2;
}
else if(oparatore === '-'){
  result = num1 - num2;
}
else if(oparatore === '*'){
  result = num1 * num2;
}
else if(oparatore ==='/'){
 result = num1 / num2;
}
else{
  result = "Inavlid number"
}
return result
}
console.log(calculatoreTwo(5,10, '*'));