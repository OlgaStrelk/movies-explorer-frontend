import { BASE_URL, token } from "./consts";

export const register = async (name, email, password) => {
  console.log(name, email, password)
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name, email, password),
  });
  return await (res.ok ? res.json() : Promise.reject(res.status));
};

export const authorize = async (email, password) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  });
  return await (res.ok ? res.json() : Promise.reject(res.status));

  // const data = await (res.ok ? res.json() : Promise.reject(res.status));
  // localStorage.setItem("jwt", data.token);
  // return data;
};

export const getProfile = async () => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await (res.ok ? res.json() : Promise.reject(res.status));
};

export const updateProfile = async (email, name) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(email, name),
  });
  return await (res.ok ? res.json() : Promise.reject(res.status));
};

// export const checkToken = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
// };
