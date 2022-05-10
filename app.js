const btn = document.querySelector('.card-button');
const app = document.querySelector('.card-app');
const adviceId = app.querySelector('h1');
const cardQuote = document.querySelector('.card-quote');
const quote = cardQuote.querySelector('p');

const divider = app.querySelector('.divider');

btn.addEventListener('click', e => {
    e.preventDefault();
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceId.innerHTML = `ADVICE #${data.slip.id}`
            quote.innerHTML = `"${data.slip.advice}"`
        }
)})
