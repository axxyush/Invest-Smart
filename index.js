const base_url =
  "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";

let amount = document.querySelector("#amount").textContent;
let btn = document.querySelector("#btn");
let currency = document.querySelector("#currency");

const updateAmount = async () => {
  let input = document.querySelector("#input").value;
  input = input.toUpperCase();
  for (coin in coinList) {
    coinCode = coinList[coin];
    if (Object.keys(coinList).includes(input)) {
      url = `https://min-api.cryptocompare.com/data/price?fsym=${coinList[input]}&tsyms=USD`;
      let response = await fetch(url);
      let data = await response.json();
      let rate = data.USD;
      document.querySelector("#amount").textContent = rate;
      currency.style.display = "";
      return;
    } else {
      document.querySelector("#amount").textContent =
        "Coin not recognised by our API";
      currency.style.display = "none";
      return;
    }
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateAmount();
});
