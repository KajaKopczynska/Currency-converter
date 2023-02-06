{
  const formElement = document.querySelector(".js-form");
  const amountElement = document.querySelector(".js-amount");
  const inputCurrencyElement = document.querySelector(".js-inputCurrency");
  const outputCurrencyElement = document.querySelector(".js-outputCurrency");
  const resultElement = document.querySelector(".js-result");

  const pln = 1;
  const eur = 4.71;
  const usd = 4.33;

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = amountElement.value;
    const inputCurrency = inputCurrencyElement.value;
    const outputCurrency = outputCurrencyElement.value;


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

}