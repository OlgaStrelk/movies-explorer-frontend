const BEATFILMS_URL = 'https://api.nomoreparties.co/beatfilm-movies'

export const getMovies = () => {
  return fetch(BEATFILMS_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};