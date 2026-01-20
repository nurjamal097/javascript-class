// Calculator Solution One
function calculatore(num1, num2, oparatore) {
  let result;

  switch (oparatore) {
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
      throw new Error("Invalid Error");
  }
  return result;
}
