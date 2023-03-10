{
  const calculateResult = (inputCurrency, outputCurrency, amount) => {
    const pln = 1;
    const eur = 4.71;
    const usd = 4.33;

    switch (inputCurrency) {
      case "PLN":
        if (outputCurrency === "PLN") return amount * 1;
        else if (outputCurrency === "EUR") return (amount * pln) / eur;
        else if (outputCurrency === "USD") return (amount * pln) / usd;

      case "EUR":
        if (outputCurrency === "EUR") return amount * 1;
        else if (outputCurrency === "USD") return (amount * eur) / usd;
        else if (outputCurrency === "PLN") return (amount * eur) / pln;
      case "USD":
        if (outputCurrency === "USD") return amount * 1;
        else if (outputCurrency === "EUR") return (amount * usd) / eur;
        else if (outputCurrency === "PLN") return (amount * usd) / pln;
    }
  }

  const updateResultText = (result, outputCurrency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${result.toFixed(2)} ${outputCurrency}`;
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const inputCurrencyElement = document.querySelector(".js-inputCurrency");
    const outputCurrencyElement = document.querySelector(".js-outputCurrency");

    const amount = amountElement.value;
    const inputCurrency = inputCurrencyElement.value;
    const outputCurrency = outputCurrencyElement.value;

    const result = calculateResult(inputCurrency, outputCurrency, amount);

    updateResultText(result, outputCurrency);
  }

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  }

  init();

}