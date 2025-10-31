"use client"

import Cookies from "js-cookie"

const TOKEN_KEY = "authToken"
const TOKEN_OPTIONS = {
  secure: typeof window !== "undefined" && window.location.protocol === "https:",
  sameSite: "strict" as const,
  path: "/",
}

export const tokenStorage = {
  setToken: (token: string) => {
    Cookies.set(TOKEN_KEY, token, TOKEN_OPTIONS)
  },

  getToken: (): string | null => {
    return Cookies.get(TOKEN_KEY) || null
  },

  removeToken: () => {
    Cookies.remove(TOKEN_KEY)
  },

  hasToken: (): boolean => {
    return !!Cookies.get(TOKEN_KEY)
  },
}
