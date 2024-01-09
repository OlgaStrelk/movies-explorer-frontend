import { BASE_URL, token } from "./consts";

export const register = async (data) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await (res.ok ? res.json() : Promise.reject(res.status));
};

export const authorize = async (data) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await (res.ok ? res.json() : Promise.reject(res.status));
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
