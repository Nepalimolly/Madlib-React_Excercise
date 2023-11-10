function addCommas(number) {
  let numString = number.toString();

  let parts = numString.split(".");
  let integerPart = parts[0];
  let decimalPart = parts[1] ? "." + parts[1] : "";

  let integerWithCommas = "";
  for (let i = 0; i < integerPart.length; i++) {
    if (i > 0 && i % 3 === 0) {
      integerWithCommas = "," + integerWithCommas;
    }

    integerWithCommas =
      integerPart[integerPart.length - 1 - i] + integerWithCommas;
  }

  return integerWithCommas + decimalPart;
}

module.exports = addCommas;
