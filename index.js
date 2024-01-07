const base_url =
  "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
const code_url =
  "https://min-api.cryptocompare.com/data/blockchain/list?api_key=a6c5e5c95ccea64df807e6b130b1fe2fc9d7feb3b765e562e39990e2f71d8dc8";

let amount = document.querySelector("#amount").textContent;
let btn = document.querySelector("#btn");
let currency = document.querySelector("#currency");

const updateAmount = async () => {
  let input = document.querySelector("#input").value;
  input = input.toUpperCase();
  let response1 = await fetch(code_url);
  let data1 = await response1.json();
  let temp = Object.keys(data1.Data);
  if (temp.includes(input)) {
    url = `https://min-api.cryptocompare.com/data/price?fsym=${input}&tsyms=USD`;
    let response2 = await fetch(url);
    let data2 = await response2.json();
    let rate = data2.USD;
    document.querySelector("#amount").textContent = rate;
    currency.style.display = "";
    return;
  } else {
    document.querySelector("#amount").textContent =
      "Coin not recognised by our API. Please Enter the coin code. Eg: BTC for Bitcoin";
    currency.style.display = "none";
    return;
  }
};

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateAmount();
});
