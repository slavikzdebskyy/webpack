const inputUsd = document.getElementById('input-usd');
const inputUah = document.getElementById('input-uah');

const rateSold = document.getElementById('sold-rate');
const rateBuy = document.getElementById('buy-rate');



inputUsd.addEventListener('keyup', ({target}) => {
  inputUah.value = (parseFloat(rateSold.innerText) * target.valueAsNumber).toFixed(2);
})

inputUah.addEventListener('keyup', ({target}) => {
  inputUsd.value = (parseFloat(rateBuy.innerText) * target.valueAsNumber).toFixed(2);
})

inputUsd.addEventListener('focus', () => inputUsd.value = null)
inputUah.addEventListener('focus', () => inputUah.value = null)

