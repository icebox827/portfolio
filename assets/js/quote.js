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
  var randomText = Math.floor(Math.random())
  const getText = document.getElementById('text');
  const getAuthor = document.getElementById('author');

  getText.innerHTML = myData.text;
  getAuthor.innerHTML = myData.author;
};

async function loadpage() {
  const quotes = document.getElementById('quotesGenerator');

  quotes.appendChild(quoteGenerator())
}



// async function loadpage() {
//   const popup = document.getElementById('popup');

//   const fetchdata = await api();
//   (displayQuote(fetchdata));
//   popup.appendChild(quoteGenerator());
// };

export default loadpage;