const api = async () => {
  const basedUrl = 'https://type.fit/api/quotes'

  const response = await fetch(basedUrl, { mode: 'cors' }).then((e) => e.json()
  .catch((e) => console.log(error)));

  console.log(response)
  return response;
};

export default api;