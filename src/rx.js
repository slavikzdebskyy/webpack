import { fromEvent } from 'rxjs';
import {tap, map, debounceTime} from 'rxjs/operators';

const inputUsd = document.getElementById('input-usd');
const inputUah = document.getElementById('input-uah');

const rateSold = document.getElementById('sold-rate');
const rateBuy = document.getElementById('buy-rate');

const resetInputs = () => {
  inputUah.value = '';
  inputUsd.value = '';
}

resetInputs();

fromEvent(inputUsd, 'keyup')
  .pipe(
    debounceTime(300),
    map(({target}) =>  target.valueAsNumber)    
  )
  .subscribe(
    value => inputUah.value = (parseFloat(rateSold.innerText) * value).toFixed(2)
  )

fromEvent(inputUah, 'keyup')
  .pipe(
    debounceTime(300),
    map(({target}) =>  target.valueAsNumber)    
  )
  .subscribe(
    value => inputUsd.value = (parseFloat(rateSold.innerText) * value).toFixed(2)
  )

fromEvent(inputUah, 'focus')
    .subscribe(
      () => resetInputs(),
    );

fromEvent(inputUsd, 'focus')
    .subscribe(
      () => resetInputs(),
    );