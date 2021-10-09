const api = async () => {
  const basedUrl = 'https://type.fit/api/quotes'

  const response = await fetch(basedUrl, { mode: 'cors' }).then((e) => e.json());

  return response;
};

export default api;