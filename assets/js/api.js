var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://healthruwords.p.rapidapi.com/v1/quotes/',
  // params: {t: 'Wisdom', maxR: '1', size: 'medium', id: '731'},
  headers: {
    'x-rapidapi-host': 'healthruwords.p.rapidapi.com',
    'x-rapidapi-key': '413dcda1b3msh390a06fcb8b7519p1aa241jsn28de708ce169'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});