import 'bulma/css/bulma.min.css';
import './scss/main.scss';
import Inputmask from 'inputmask';

function parseNumber(input: string): number | null {
    const number = input.replace(/D/g, '');
    if (number.length < 10) return null;

    return Number(number);
}

async function main() {
    const $input = document.querySelector('input') as HTMLInputElement;
    const $btn = document.querySelector('button') as HTMLButtonElement;

    const params = new URLSearchParams(location.search);

    const phone =
        (params.has('phone') && parseNumber(params.get('phone')!)) || null;

    if (phone) $input.value = String(phone);

    $btn.addEventListener('click', () => {
        const number = parseNumber($input.value);
        if (!number) return;

        window.open(`https://wa.me/+55${number}`, '_blank');
    });

    Inputmask({ regex: String.raw`\(\d{2}\) 9?\d{4}-\d{4}` }).mask($input);
}

document.addEventListener('DOMContentLoaded', main);
