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
        break;
      case "EUR":
        if (outputCurrency === "EUR") return amount * 1;
        else if (outputCurrency === "USD") return (amount * eur) / usd;
        else if (outputCurrency === "PLN") return (amount * eur) / pln;
        break;
      case "USD":
        if (outputCurrency === "USD") return amount * 1;
        else if (outputCurrency === "EUR") return (amount * usd) / eur;
        else if (outputCurrency === "PLN") return (amount * usd) / pln;
        break;
    }
  }


  const formElement = document.querySelector(".js-form");


  formElement.addEventListener("submit", (event) => {
    event.preventDefault();


    const amountElement = document.querySelector(".js-amount");
    const inputCurrencyElement = document.querySelector(".js-inputCurrency");
    const outputCurrencyElement = document.querySelector(".js-outputCurrency");
    const resultElement = document.querySelector(".js-result");

    const amount = amountElement.value;
    const inputCurrency = inputCurrencyElement.value;
    const outputCurrency = outputCurrencyElement.value;

    const result = calculateResult(inputCurrency, outputCurrency, amount);

    resultElement.innerText = `${result.toFixed(2)} ${outputCurrency}`;




  });

}