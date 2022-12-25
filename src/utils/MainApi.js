import { useEffect } from "react";
import { BASE_URL, token } from "./consts";

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name, email, password),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
    .then((data) => {
      localStorage.setItem("jwt", data.token);
      return data;
    });
};

export const getProfile = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export const updateProfile = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
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
