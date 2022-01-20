import api from './api';

const quoteGenerator = () => {
  const text = document.createElement('h5');
  const author = document.createElement('h6');

  text.classList.add('quote-text');
  author.classList.add('quote-author');

  text.setAttribute('id', 'text');
  author.setAttribute('id', 'author');

  return quoteGenerator
}

const displayQuote = (myData) => {
  var randomText = Math.floor(Math.random() * myData)
  const getText = document.getElementById('text');
  const getAuthor = document.getElementById('author');

  getText.innerHTML = myData.text;
  getAuthor.innerHTML = myData.author;
};

async function loadpage() {
  const quotes = document.getElementById('quotesGenerator');
  const fetchdata = await api();

  quotes.appendChild(quoteGenerator());
  (displayQuote(fetchdata));
}

export default loadpage;