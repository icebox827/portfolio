import api from './api';

// const quoteGenerator = () => {
//   const modalBox = document.createElement('card');
//   const text = document.createElement('h1');
//   const author = document.createElement('h2');

//   modalBox.classList.add('modal-card');
//   text.classList.add('text');
//   author.classList.add('author');

//   text.setAttribute('id', 'text');
//   author.setAttribute('id', 'author');

//   modalBox.appendChild(text);
//   modalBox.appendChild(author);

//   return quoteGenerator;
// };

// const displayQuote = (data) => {
//   const getText = document.getElementById('text');
//   const getAuthor = document.getElementById('author');

//   getText.innerHTML = data.text;
//   getAuthor.innerHTML = data.author;
// }

// async function loadpage() {
//   const popup = document.getElementById('popup');

//   const fetchdata = await api();
//   (displayQuote(fetchdata));
//   popup.appendChild(quoteGenerator());
// };

export default loadpage;