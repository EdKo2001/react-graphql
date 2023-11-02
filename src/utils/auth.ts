import Cookies from "js-cookie";

import { env } from ".";

const accessTokenKey = "accessToken";

export function getAccessToken() {
  return Cookies.get(accessTokenKey);
}

export async function login(email: string, password: string) {
  const response = await fetch(`${env.REACT_APP_API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token } = await response.json();
    Cookies.set(accessTokenKey, token, { expires: 7 });
  }

  return response.ok;
}

export function isLoggedIn() {
  return !!Cookies.get(accessTokenKey);
}

export function logout() {
  Cookies.remove(accessTokenKey);
}
