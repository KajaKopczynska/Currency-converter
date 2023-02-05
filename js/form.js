let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let inputCurrencyElement = document.querySelector(".js-inputCurrency");
let outputCurrencyElement = document.querySelector(".js-outputCurrency");
let resultElement = document.querySelector(".js-result");

let pln = 1;
let eur = 4.71;
let usd = 4.33;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let amount = amountElement.value;
  let inputCurrency = inputCurrencyElement.value;
  let outputCurrency = outputCurrencyElement.value;


  switch (inputCurrency) {
    case "PLN":
      if (outputCurrency === "PLN") result = amount * 1;
      else if (outputCurrency === "EUR") result = (amount * pln) / eur;
      else if (outputCurrency === "USD") result = (amount * pln) / usd;
      break;
    case "EUR":
      if (outputCurrency === "EUR") result = amount * 1;
      else if (outputCurrency === "USD") result = (amount * eur) / usd;
      else if (outputCurrency === "PLN") result = (amount * eur) / pln;
      break;
    case "USD":
      if (outputCurrency === "USD") result = amount * 1;
      else if (outputCurrency === "EUR") result = (amount * usd) / eur;
      else if (outputCurrency === "PLN") result = (amount * usd) / pln;
      break;
  }


  resultElement.innerText = `${result.toFixed(2)} ${outputCurrency}`;




});
