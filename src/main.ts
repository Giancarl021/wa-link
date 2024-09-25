import 'bulma';
import './scss/main.scss';
import Inputmask from 'inputmask';

async function main() {
  const $input = document.querySelector('input') as HTMLInputElement;
  const $btn = document.querySelector('button') as HTMLButtonElement;

  $btn.addEventListener('click', () => {
    const number = $input.value.replace(/\D/g, '');
    if (String(number).length < 10) return;
    window.open(`https://wa.me/+55${number}`, '_blank');
  })

  Inputmask({ regex: String.raw`\(\d{2}\) 9?\d{4}-\d{4}` }).mask($input);  
}

document.addEventListener('DOMContentLoaded', main);